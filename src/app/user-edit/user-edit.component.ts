import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.checkLoggedIn();
    this.loadUser();
  }

  loadUser(): void {
    this.user = this.userService.getCurrentUser();
    this.userForm = this.formBuilder.group({
      firstname: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      image: [this.user.image]
    })
  }
  
  checkLoggedIn(): void {
    if (false == this.userService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

}
