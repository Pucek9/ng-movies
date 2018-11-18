import {HttpHeaders} from '@angular/common/http';

export function prepareCommonHeaders(user) {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': user.token,
  });
}

export function generateArrayOfNumbers(n): number[] {
  return Array.from(new Array(n), (val, index) => index + 1);
}

