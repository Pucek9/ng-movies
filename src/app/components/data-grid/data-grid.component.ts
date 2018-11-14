import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as paramsActions from '../../store/params/params.actions';
import {ParamsState} from '../../store/params/params.state';

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

  order = true;

  constructor(
    private store$: Store<ParamsState>
  ) {
  }

  ngOnInit() {
  }

  public changeSortDir() {
    this.order = !this.order;
    this.store$.dispatch(new paramsActions.SetSortDir(this.order ? 1 : -1));
  }

}
