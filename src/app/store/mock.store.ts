import {BehaviorSubject, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map} from 'rxjs/operators';

export class MockStore<T> extends BehaviorSubject<T> {
  constructor(private _initialState: T) {
    super(_initialState);
  }

  dispatch = (action: Action): void => {
  };

  select = <T, R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return map.call(this, pathOrMapFn);
  };
}
