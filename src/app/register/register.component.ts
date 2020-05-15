import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthuserService } from '../services/authuser.service';
import { ConfirmedValidator } from './confirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  submitted = false;
  constructor(private formbuild: FormBuilder, private authService: AuthuserService) {
    this.registerform = this.formbuild.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: ["", [Validators.required]]
    },{
      validator: ConfirmedValidator('password', 'confirmPassword')
    }
    )
  }
  get f() {
    return this.registerform.controls;
  }

  ngOnInit() {
  }

  register() {

    this.submitted = true;
    if (this.registerform.invalid) {
      return;
    }
    console.log(this.registerform.get("username").value)
    console.log(this.registerform.get("email").value)
    console.log(this.registerform.get("password").value)
    console.log(this.registerform.get("confirm").value)
    this.authService.SignUp(this.registerform.get("email").value, this.registerform.get("password").value);
  }
}

