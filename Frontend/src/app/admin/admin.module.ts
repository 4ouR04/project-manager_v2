import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

// const adminRoutes: Routes = [
//   {
//     path:'projects' , component: NewProjectComponent
//   }
// ]

@NgModule({
  declarations: [NewProjectComponent, ClientsComponent, ProjectsComponent, DashboardComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [NewProjectComponent, ClientsComponent, ProjectsComponent],
})
export class AdminModule {}
