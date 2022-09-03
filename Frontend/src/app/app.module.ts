import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserModule } from './user/user.module';
import { ProjectsService } from './services/projects.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AdminModule,
    AuthModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,AuthService,ProjectsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
