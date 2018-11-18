import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {getActorDetailsSelector} from '../../store/actor-details/actor-details.reducer';
import * as actorDetailsActions from '../../store/actor-details/actor-details.actions';
import {ActorDetailsState} from '../../store/actor-details/actor-details.state';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnDestroy {

  public actor$ = this.store$.pipe(select(getActorDetailsSelector));
  public imdbURL = environment.imdbURL;

  constructor(
    private store$: Store<ActorDetailsState>,
  ) {
  }

  ngOnDestroy() {
    this.store$.dispatch(new actorDetailsActions.Clear());
  }

}
