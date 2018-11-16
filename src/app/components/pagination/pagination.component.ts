import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {ParamsState} from '../../store/params/params.state';
import {combineLatest, Observable, of, Subject, Subscription} from 'rxjs';
import {paramsSelector} from '../../store/params/params.reducer';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import * as paramsActions from '../../store/params/params.actions';
import {generateArrayOfNumbers} from '../../helpers/helpers';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  @Input()
  total$: Observable<number>;

  subscriptions = new Subscription();
  limits: Array<number> = [5, 10, 15];
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  page$: Observable<number> = this.params$.pipe(map(params => params.page));
  limit$: Observable<number> = this.params$.pipe(map(params => params.limit));
  selectedLimit: number;
  selectedPage: number;
  pages$: Observable<number[]>;

  constructor(
    private store$: Store<ParamsState>,
  ) {

  }

  ngOnInit() {
    this.pages$ = combineLatest(this.total$, this.limit$).pipe(
      switchMap(([total, limit]: [number, number]) => {
        const numberOfPages = limit === 0 || total === 0 ? 1 : total / limit;
        const pages = generateArrayOfNumbers(Math.ceil(numberOfPages));
        return of(pages);
      })
    );
    this.subscriptions.add(
      this.params$.subscribe(params => {
        this.selectedLimit = params.limit;
        this.selectedPage = params.page;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  changeLimit() {
    this.store$.dispatch(new paramsActions.SetLimit(parseInt(this.selectedLimit, 0)));
    if (this.selectedLimit === 0) {
      this.changePage(1);
    }
  }

  changePage(page) {
    this.selectedPage = page;
    this.store$.dispatch(new paramsActions.SetPage(this.selectedPage));
  }


}


