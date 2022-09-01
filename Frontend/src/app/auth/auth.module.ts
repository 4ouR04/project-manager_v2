import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginSignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LoginSignupComponent,FormsModule]
})
export class AuthModule { }
