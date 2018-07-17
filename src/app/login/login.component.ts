import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validatedUser: boolean;
  isSubmited: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  /**
   * Create form group with validators
   */
  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  /**
   * Try and log user with form inputs
   */
  login(): void {
    this.isSubmited = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.userService.loginUser(this.email.value, this.password.value).subscribe(
      logUserResponse => {
        if (logUserResponse.status > 300) {
          this.loginForm.setErrors({ invalid: true });
        } else {
          this.router.navigate(['user/edit']);
        }
      }
    );
  }

}
