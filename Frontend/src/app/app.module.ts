import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
// import {Htt}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { Routes,RouterModule } from '@angular/router';
import { NewProjectComponent } from './admin/new-project/new-project.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FallbackComponent } from './fallback/fallback.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CompleteProjectsComponent } from './user/complete-projects/complete-projects.component';
import { UsrProjectsComponent } from './user/usr-projects/usr-projects.component';
import { AllComponent } from './user/all/all.component';
import { UserModule } from './user/user.module';
import { ProjectsService } from './services/projects.service';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'admin/dashboard',
    component: AdminComponent,
    canActivateChild: [AuthGuard],

    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'projects/new',
        component: NewProjectComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
    ],
  },
  {
    path: 'user/dashboard', component: UserComponent,
    children: [
      {
        path: '',
        component: AllComponent
      },
      {
        path:'projects', component: UsrProjectsComponent
      },
      {
        path: 'projects/complete', component: CompleteProjectsComponent
      }
    ]
  },
  {
    path: 'error',
    component: FallbackComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

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
    AppRoutingModule,
    AdminModule,
    AuthModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,AuthService,ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
