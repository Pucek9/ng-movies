import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {ParamsState} from '../../store/params/params.state';
import {combineLatest, Observable, of, Subject, Subscription} from 'rxjs';
import {paramsSelector} from '../../store/params/params.reducer';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import * as paramsActions from '../../store/params/params.actions';
import {generateArrayOfNumbers} from '../../helpers/helpers';
import {Router} from '@angular/router';
import {moviesTotalSelector} from '../../store/movies/movies.reducer';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();
  total$: Observable<number> = this.store$.pipe(select(moviesTotalSelector));
  limits: Array<number> = [5, 10, 15];
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  page$: Observable<number> = this.params$.pipe(map(params => params.page));
  limit$: Observable<number> = this.params$.pipe(map(params => params.limit));
  pages$: Observable<number[]> = combineLatest(this.limit$, this.total$).pipe(
    map(([limit, total]: [number, number]) => {
      const numberOfPages = limit === 0 || total === 0 ? 1 : total / limit;
      return generateArrayOfNumbers(Math.ceil(numberOfPages));
    })
  );
  selectedLimit: string;
  selectedPage: number;
  pages: number[];

  constructor(
    private store$: Store<ParamsState>,
    private router: Router
  ) {

  }

  ngOnInit() {

    this.subscriptions.add(this.params$.subscribe((params: ParamsState) => {
      this.selectedLimit = params.limit.toString();
      this.selectedPage = params.page;
    }));
    this.subscriptions.add(this.pages$.subscribe((pages: number[]) => this.pages = pages));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  changeLimit() {
    this.store$.dispatch(new paramsActions.SetLimit(parseInt(this.selectedLimit, 0)));
    this.changePage(1);
  }

  goToSelectedPage() {
    this.router.navigate(['/page/' + this.selectedPage]);
  }

  changePage(page) {
    this.selectedPage = page;
    this.goToSelectedPage();
  }

  nextPage() {
    this.selectedPage++;
    this.goToSelectedPage();
  }

  previousPage() {
    this.selectedPage--;
    this.goToSelectedPage();
  }
}


