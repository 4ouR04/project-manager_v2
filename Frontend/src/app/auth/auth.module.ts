import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent
  }
]

@NgModule({
  declarations: [
    LoginSignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
    
  ],
  exports: [LoginSignupComponent,FormsModule]
})
export class AuthModule { }
