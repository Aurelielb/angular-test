import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
  private donationsUrl = 'api/donations';

  constructor(private http: HttpClient) { }

  getDonationsByUserId (id: number): Observable<any> {
    const url = `${this.donationsUrl}/?userId=${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>([]))
    );
  }

  getDonationsByProjectId (id: number): Observable<any> {
    const url = `${this.donationsUrl}/?projectId=${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>([]))
    );
  }

  addDonation (projectId: number, userId: number): Observable<any> {
    return this.http.post<any>(this.donationsUrl, {projectId, userId, timestamp: Date.now()}).pipe(
      catchError(this.handleError<any>(''))
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
