import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';
import { DonationsService } from '../donations.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  donationsCount: number;
  donationsHistory;
  projects: Project[];

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private donationsService: DonationsService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getSelectedUser();
    this.getProjects();
  }

  getSelectedUser () {
    const userID = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(+this.route.snapshot.paramMap.get('id')).subscribe(user => {
      this.user = user;
    });
    this.getUserDonations(userID);
  }

  getUserDonations (id: number) {
    this.donationsService.getDonationsByUserId(id).subscribe(donations => {
      this.donationsCount = donations.length;
      this.donationsHistory = donations;
    });
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(
      projects => {
        this.projects = projects
      }
    );
  }

}
