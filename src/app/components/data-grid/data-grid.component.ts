import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as paramsActions from '../../store/params/params.actions';
import {ParamsState, sortDirEnum} from '../../store/params/params.state';
import {paramsSelector, sortDirAscendingSelector} from '../../store/params/params.selectors';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

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
  route: string;
  @Input()
  urlId: string;

  sortDir: boolean;
  subscriptions = new Subscription();
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  isSortDirAscending$: Observable<boolean> = this.store$.pipe(select(sortDirAscendingSelector));

  constructor(
    private store$: Store<ParamsState>,
  ) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.isSortDirAscending$.subscribe(isSortDirAscending => {
        this.sortDir = isSortDirAscending;
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
    this.store$.dispatch(new paramsActions.SetSortDir(this.sortDir ? sortDirEnum.ASCENDING : sortDirEnum.DESCENDING));
  }

  public changeSortBy(i: number) {
    this.store$.dispatch(new paramsActions.SetSortBy(this.displayedElements[i]));
  }

}
