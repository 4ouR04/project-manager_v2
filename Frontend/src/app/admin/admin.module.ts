import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth-guard.service';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

const adminRoutes: Routes = [
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
];

@NgModule({
  declarations: [NewProjectComponent, ClientsComponent, ProjectsComponent, DashboardComponent],
  imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(adminRoutes)],
  exports: [NewProjectComponent, ClientsComponent, ProjectsComponent],
})
export class AdminModule {}
