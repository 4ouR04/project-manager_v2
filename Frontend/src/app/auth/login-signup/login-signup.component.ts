import { Component, OnInit } from '@angular/core';
import {
  AuthService
} from 'src/app/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  isLoginMode = true;
  user = {
    Name : '',
    Email : '',
    Password: ''
  }
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onLogin() {
  }
  onSubmit(form: NgForm) {
    this.user.Name = form.value.name
    this.user.Email = form.value.email
    this.user.Password= form.value.password

    
    if (this.isLoginMode) {
      // login
      this.http.get
      return this.authService.login();
      
    } else {
      // sign up
      form.reset()
      
    }
  }
  
}
