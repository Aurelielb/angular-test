import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  connectUser(email: string, password: string): Observable<User> {
    const url = `${this.usersUrl}/?email=${email}&password=${password}`;
    return this.http.get<User>(url).pipe(
      catchError((err, caught) => console.log(err, caught))
    );
  }

}
