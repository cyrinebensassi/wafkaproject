import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthuserService } from '../services/authuser.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  submitted = false;

  constructor( private formbuild: FormBuilder, private authService: AuthuserService) {
    this.forgotForm = this.formbuild.group ({
      email: ["",[Validators.required , Validators.email]],
    })
   }
   get f() {
     return this.forgotForm.controls;
   }

  ngOnInit() {
  }

  forgot(){
    this.submitted = true;
    if (this.forgotForm.invalid){
      return;
    }
    console.log(this.forgotForm.get("email").value)
 
  }

}
