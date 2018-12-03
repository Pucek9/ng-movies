import {BehaviorSubject, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {initializeRootState, RootState} from './root/root.state';

export class MockStore extends BehaviorSubject<> {
  constructor(private _initialState: RootState = initializeRootState()) {
    super([_initialState]);
  }

  dispatch = (action: Action): void => {
  }

  select = <R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return map.call(this, pathOrMapFn);
  }
}
