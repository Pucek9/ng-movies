import {BehaviorSubject, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {initializeRootState} from './root/root.state';

export class MockStore<T> extends BehaviorSubject<T> {
  constructor(private _initialState: T = initializeRootState()) {
    super([_initialState]);
  }

  dispatch = (action: Action): void => {
  }

  select = <R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return map.call(this, pathOrMapFn);
  }
}
