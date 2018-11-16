import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ParamsState} from '../../store/params/params.state';
import {Observable, Subscription} from 'rxjs';
import {paramsSelector} from '../../store/params/params.reducer';
import {map} from 'rxjs/operators';
import * as paramsActions from '../../store/params/params.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  @Input()
  total$;
  subscriptions = new Subscription();
  limits: Array<number>;
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  page$: Observable<number> = this.params$.pipe(map(params => params.page));
  limit$: Observable<number> = this.params$.pipe(map(params => params.limit));
  selectedLimit: number;
  selectedPage: number;
  pages = [1, 2, 3];
  // offset = (page - 1) * itemsPerPage + 1

  constructor(
    private store$: Store<ParamsState>,
  ) {
  }

  ngOnInit() {
    this.limits = [5, 10, 15];
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
    this.store$.dispatch(new paramsActions.SetLimit(this.selectedLimit));
    if (this.selectedLimit === 0) {
      this.changePage(1);
    }
  }

  changePage(page) {
    this.selectedPage = page;
    this.store$.dispatch(new paramsActions.SetPage(this.selectedPage));
  }

}


