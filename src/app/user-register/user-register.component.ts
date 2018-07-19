import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  isSubmitted: boolean;
  serverError = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

  createForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit (): void {
    this.isSubmitted = true;

    if (this.userForm.invalid) {
      return;
    }

    const newUser = { image: '/assets/pictures/guy.svg', ...this.userForm.value };
    this.authService.addUser(newUser).subscribe(response => {
      if (response.status > 300) {
        this.serverError = true;
      } else {
        this.authService.loginUser(newUser.email, newUser.password).subscribe(
          logUserResponse => {
            if (logUserResponse.status > 300) {
              this.serverError = true;
            } else {
              this.router.navigate(['user/edit']);
            }
          }
        );
      }
    });
  }

}
