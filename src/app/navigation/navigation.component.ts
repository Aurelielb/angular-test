import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: User;
  loggedIn: boolean = this.authService.isLoggedIn();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initUser();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.initUser();
      }
    });
  }

  initUser(): void {
    this.user = this.authService.getCurrentUser();
    this.loggedIn = this.authService.isLoggedIn();
  }

  logoutUser(): void {
    this.authService.logoutUser();
    this.router.navigate(['']);
  }

}
