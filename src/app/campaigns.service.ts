import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private campaignUrl = 'api/campaigns';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campaignUrl);
  }
}
