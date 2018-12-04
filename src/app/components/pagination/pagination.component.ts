import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

import {ParamsState} from '../../store/params/params.state';
import * as paramsActions from '../../store/params/params.actions';
import {paramsSelector, pageSelector} from '../../store/params/params.selectors';
import {pagesListSelector} from '../../store/root/root.selectors';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();
  limits: Array<number> = [5, 10, 15];
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  pages$: Observable<number[]> = this.store$.pipe(select(pagesListSelector));
  page$: Observable<number> = this.store$.pipe(select(pageSelector));

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


