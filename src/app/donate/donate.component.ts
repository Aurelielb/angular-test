import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { DonationsService } from '../donations.service';
import { CampaignsService } from '../campaigns.service';
import { User } from '../user';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  user: User;
  loggedIn: boolean;
  campaigns: Campaign[];
  selectedCampaign: Campaign;
  showModal = true;
  timeToWait = 20;
  timer;
  enableDonation = false;
  success = false;

  @Input('projectId') projectId: number;
  @Input('donateClass') donateClass: string;

  // @ViewChild('videoPlayer') videoPlayer: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private campaignsService: CampaignsService,
    private donationsService: DonationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initUser();
    this.getCampaigns();
  }

  openDonation(): void {
    if (this.loggedIn) {
      this.selectedCampaign = this.campaigns[Math.floor(Math.random() * this.campaigns.length)];
      this.showModal = true;
    } else {
      this.router.navigate(['login']);
    }
  }

  closeModal(e): void {
    e.preventDefault();
    this.showModal = false;
  }

  onPlay(): void {
    this.timer = window.setInterval(() => this.checkTime(), 1000);
  }

  onPause(): void {
    window.clearInterval(this.timer);
  }

  checkTime(): void {
    if (this.timeToWait > 0) {
      this.timeToWait --;
    } else {
      window.clearInterval(this.timer);
      this.enableDonation = true;
    }
  }

  addDonation(e): void {
    e.target.setAttribute('disabled', '');
    this.donationsService.addDonation(this.projectId, this.user.id).subscribe(response => {
      // todo: manage error response
      this.success = true;
      window.setTimeout(() => this.showModal = false, 5000);
    });
  }

  getCampaigns(): void {
    this.campaignsService.getCampaigns().subscribe(campaigns => this.campaigns = campaigns);
  }

  private initUser(): void {
    this.user = this.authService.getCurrentUser();
    this.loggedIn = this.authService.isLoggedIn();
  }
}
