import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

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
    return this.http.post<any>(this.donationsUrl, { projectId: projectId, userId: userId, timestamp: Date.now().toString() }).pipe(
      catchError(this.handleError<any>({ status: 400, message: 'Error while updating User' }))
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
