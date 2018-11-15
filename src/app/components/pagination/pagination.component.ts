import {Component, OnDestroy, OnInit} from '@angular/core';
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

  subscriptions = new Subscription();
  limits: Array<number>;
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  page$: Observable<number> = this.params$.pipe(map(params => params.page));
  limit$: Observable<number> = this.params$.pipe(map(params => params.limit));
  limit: number;

  constructor(
    private store$: Store<ParamsState>,
  ) {
  }

  ngOnInit() {
    this.limits = [0, 5, 10, 15];
    this.subscriptions.add(
      this.limit$.subscribe(limit => {
        this.limit = limit;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  changeLimit() {
    console.log(this.limit);
    this.store$.dispatch(new paramsActions.SetLimit(this.limit));
  }
}


