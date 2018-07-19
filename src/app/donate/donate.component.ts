import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { DonationsService } from '../donations.service';
import { User } from '../user';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  user: User;
  loggedIn: boolean;
  showVideo = false;

  @Input('projectId') projectId: number;
  @Input('donateClass') donateClass: string;

  constructor(
    private authService: AuthService,
    private donationsService: DonationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initUser();
  }

  openDonation(): void {
    if (this.loggedIn) {
      this.showVideo = true;
      // this.addDonation();
    } else {
      this.router.navigate(['login']);
    }
  }

  addDonation(): void {
    this.donationsService.addDonation(this.projectId, this.user.id).subscribe(response => {
      // todo: manage response
    });
  }

  private initUser(): void {
    this.user = this.authService.getCurrentUser();
    this.loggedIn = this.authService.isLoggedIn();
  }
}
