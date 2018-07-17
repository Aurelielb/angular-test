import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  isSubmited: boolean;
  serverError: boolean = false;
  serverSuccess: boolean = false;

  portraits: object = [
    { src: '/assets/pictures/beard-guy.svg', name: 'beard guy'},
    { src: '/assets/pictures/beard-man.svg', name: 'beard guy 2'},
    { src: '/assets/pictures/girl.svg', name: 'girl'},
    { src: '/assets/pictures/glasses-girl.svg', name: 'glasses girl'},
    { src: '/assets/pictures/guy.svg', name: 'guy'},
    { src: '/assets/pictures/long-hair-girl.svg', name: 'long haired girl'},
    { src: '/assets/pictures/old-man.svg', name: 'old man'},
    { src: '/assets/pictures/short-hair-girl.svg', name: 'short haired girl'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit () {
    this.checkLoggedIn();
    this.loadUser();
  }

  onSubmit (): void {
    this.isSubmited = true;

    if (this.userForm.invalid) {
      return;
    }

    this.user = {...this.user, ...this.userForm.value};
    this.authService.updateUser(this.user).subscribe(response => {
      if (response.status > 300) {
        this.serverError = true;
        // todo : reset form
      } else {
        this.serverSuccess = true;
      }
    });
  }

  loadUser (): void {
    this.user = this.authService.getCurrentUser();
    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      image: [this.user.image]
    })
  }
  
  checkLoggedIn (): void {
    if (false == this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

}
