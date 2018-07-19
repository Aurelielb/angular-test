import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { Observable, of, throwError } from 'rxjs';

interface Response {
  status: number;
  message: string;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
    return localStorage.getItem('loggedIn') === 'true' || false;
  }

  getCurrentUser (): User {
    const user = localStorage.getItem('user');
    if (null != user) {
      return JSON.parse(user);
    }
    return null as User;
  }

  updateUser (user: User): Observable<Response> {
    return this.http.put<User>(this.usersUrl, user, httpOptions).pipe(
      map(_ => ({ status: 200, message: 'success' })),
      tap(_ => this.setCurrentUser(user)),
      catchError(this.handleError<Response>({ status: 400, message: 'Error while updating User' }))
    );
  }

  private identifyUser (email: string, password: string): Observable<Response> {
    // const url = `${this.usersUrl}?email=${email}&password=${password}`;
    return this.http.get<User>(this.usersUrl, { params: {/*'email': email, */'password': password } }).pipe(
      map(users => {
        if (users[0]) {
          this.setCurrentUser(users[0] as User);
          return { status: 200, message: 'success' };
        } else {
          return { status: 404, message: 'User not found' };
        }
      }),
      catchError(this.handleError<Response>({ status: 400, message: 'Error while getting User' }))
    );
  }

  private setCurrentUser (user: User): void {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(user));
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
