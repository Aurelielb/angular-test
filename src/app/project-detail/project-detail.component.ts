import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';
import { DonationsService } from '../donations.service';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  donationsCount: number;
  users: User[] = [];
  userDonationsHistory = [];
  slide = 0;
  slideMax: number;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private donationsService: DonationsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getProject();
  }

  nextSlide(event): void {
    event.preventDefault();
    this.slide = this.slide < this.slideMax - 1 ? this.slide + 1 : 0;
  }

  prevSlide(event): void {
    event.preventDefault();
    this.slide = (this.slide > 0 ? this.slide : this.slideMax) - 1;
  }

  // get selected project by id
  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(
      project => {
        this.project = project;
        this.slideMax = project.images.length ? project.images.length : 0;
      }
    );
    this.getProjectDonations(id);
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getProjectDonations (id: number) {
    this.donationsService.getDonationsByProjectId(id).subscribe(donations => {
      this.donationsCount = donations.length;
      donations.forEach(donation => {
        if (this.userDonationsHistory[donation.userId] && this.userDonationsHistory[donation.userId].id) {
          this.userDonationsHistory[donation.userId].count ++;
        } else {
          this.userDonationsHistory[donation.userId] = { count: 1, ...this.users[donation.userId - 1] };
        }
      });
      this.userDonationsHistory = this.userDonationsHistory.filter(user => user);
    });
  }

}
