import { Component, OnInit } from '@angular/core';
import {
  AuthService
} from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  isLoginMode = true;
  user = {
    Name: '',
    Email : '',
    Password: ''
  }
  lgnUser = {
    Email: '',
    Password: ''
  }
  
  constructor(private authService: AuthService, private service: UserService) {}
  userdata: any
  mydata: any
  message!: string
  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  
  onSubmit(form: NgForm) {
    this.user.Name = form.value.name
    this.user.Email = form.value.email
    this.user.Password= form.value.password

    this.lgnUser.Email = form.value.email
    this.lgnUser.Password = form.value.password
    
    if (this.isLoginMode) {
      // login
      this.service.onLogin(this.lgnUser).subscribe(response=> {
        this.userdata = response
        this.message = this.userdata.message || this.userdata.error
      

        // store generated token in the local storage
        localStorage.setItem('token', this.userdata.token)

        // check user role
        this.service.checkUser(this.userdata.token).subscribe(frmjwt => {
          this.mydata = frmjwt
          return this.authService.login(this.mydata.Role);
          
        })
        
        
      })
      
    } else {
      // sign up
      console.log(this.user)
      this.service.onSignup(this.user).subscribe(response=>{})
      form.reset()
      
    }
  }
  
}

// Author: Amos Mwongela Gabriel
// Email:  amosmwongelah@gmail.com
// File:   login-signup.component.ts
