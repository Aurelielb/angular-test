import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  validatedUser: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(5)]
    });
  }

  login(): void {
    const loginDatas = this.loginFormGroup.value;

    if (this.loginFormGroup.invalid) {
      return;
    }
    console.log(this.loginFormGroup.invalid, this.loginFormGroup);
  }

}
