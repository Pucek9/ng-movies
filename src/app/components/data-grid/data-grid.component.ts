import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as paramsActions from '../../store/params/params.actions';
import {ParamsState} from '../../store/params/params.state';
import {paramsSelector} from '../../store/params/params.reducer';
import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy {

  @Input()
  headElements: string[];
  @Input()
  sortElements: string[];
  @Input()
  displayedElements: string[];
  @Input()
  typeElements: string[];
  @Input()
  elements$: Observable<any>;
  @Input()
  urlId: string;

  sortDir: boolean;
  subscriptions = new Subscription();
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  sortDir$: Observable<boolean> = this.params$.pipe(map(params => params.sortDir === 1));

  constructor(
    private store$: Store<ParamsState>,
  ) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.params$.subscribe(params => {
        this.sortDir = params.sortDir === 1;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public isSortable(head: string) {
    return this.sortElements.includes(head);
  }

  public isActual(i: number) {
    return this.params$.pipe(map(params => params.sortBy === this.displayedElements[i]));
  }

  public changeSortDir() {
    this.sortDir = !this.sortDir;
    this.store$.dispatch(new paramsActions.SetSortDir(this.sortDir ? 1 : -1));
  }

  public changeSortBy(i: number) {
    this.store$.dispatch(new paramsActions.SetSortBy(this.displayedElements[i]));
  }

}
