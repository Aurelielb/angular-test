import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CampaignsService } from './campaigns.service';

describe('CampaignsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignsService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([CampaignsService], (service: CampaignsService) => {
    expect(service).toBeTruthy();
  }));
});
