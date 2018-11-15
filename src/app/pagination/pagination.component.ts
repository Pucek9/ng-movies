import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ParamsState} from '../store/params/params.state';
import {Observable, Subscription} from 'rxjs';
import {paramsSelector} from '../store/params/params.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  // sortDir: boolean;
  // subscriptions = new Subscription();
  params$: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));
  page$: Observable<number> = this.params$.pipe(map(params => params.page));

  constructor(
    private store$: Store<ParamsState>,
  ) {
  }

  ngOnInit() {
  }

}
