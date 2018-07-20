import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { Observable, of, throwError } from 'rxjs';

interface Response {
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  loginUser (email: string, password: string): Observable<Response> {
    return this.identifyUser(email, password);
  }

  logoutUser (): void {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
  }

  isLoggedIn (): boolean {
    return localStorage.getItem('loggedIn') == 'true' || false;
  }

  getCurrentUser (): User {
    const user = localStorage.getItem('user');
    if (null != user) {
      return JSON.parse(user);
    }
    return null as User;
  }

  private identifyUser (email: string, password: string): Observable<Response> {
    // const url = `${this.usersUrl}?email=${email}&password=${password}`;
    return this.http.get<User>(this.usersUrl, { params: {/*'email': encodeURI(email), */'password': password } }).pipe(
      map(users => users[0]),
      tap(user => {
        console.log('tap identify', user);
        if (user) {
          this.setCurrentUser(user as User);
          return { status: 200, message: 'success' }
        }
        else {
          return { status: 400, message: 'Error while getting User' };
        }
      }),
      catchError(this.handleError<User>(null as User))
    );
  }

  private setCurrentUser (user: User): void {
    console.log('set ', user);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', user.toString());
  }

  /**
   * handle HTTP errors
   * @param result optionnal, set the result you want to return
   */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.log('catchError', error);

      return of(result as T);
    }
  }

}
