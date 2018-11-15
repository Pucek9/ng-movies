import {Component, HostListener, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as paramsActions from '../../store/params/params.actions';
import {ParamsState} from '../../store/params/params.state';
import {paramsSelector} from '../../store/params/params.reducer';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input()
  headElements: string[];
  @Input()
  elements: any[];
  @Input()
  sortElements: string[];

  order = true;
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));

  // @HostListener('input') onInput() {
  //   this.changeSortDir();
  // }

  constructor(
    private store$: Store<ParamsState>,
  ) {
  }

  ngOnInit() {
  }

  public isSortable(head: string) {
    return this.sortElements.includes(head);
  }

  public isActual(head: string) {
    return this.params$.pipe(map(params => params.sortBy === head.toLowerCase()));
  }

  public changeSortDir() {
    this.order = !this.order;
    this.store$.dispatch(new paramsActions.SetSortDir(this.order ? 1 : -1));
  }

  public sortBy(head) {

    this.isActual(head).pipe(
      // map(value => {
      // console.log('TODO', value);
      // if (value) {
      //   this.changeSortDir();
      // } else {
      //   this.store$.dispatch(new paramsActions.SetSortBy(head.toLowerCase()));
      // })
    );
  }


  // if (this.isActual(head)) {
  //   this.changeSortDir();
  // } else {
  //   this.store$.dispatch(new paramsActions.SetSortBy(head.toLowerCase()));
  // }


}
