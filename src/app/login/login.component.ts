import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthuserService } from '../services/authuser.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;
  constructor(private formbuild: FormBuilder,private authService:AuthuserService) {
    this.loginForm = this.formbuild.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
  
  }

  login() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.get("email").value)
    console.log(this.loginForm.get("password").value)
    this.authService.SignIn(this.loginForm.get("email").value, this.loginForm.get("password").value);
  }

}
