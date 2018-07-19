import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>([]))
    );
  }

  getUserById (id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(null))
    );
  }

  /**
   * handle HTTP errors
   * @param result optionnal, set the result you want to return
   */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.log('catchError', error);

      return of(result as T);
    };
  }
}
