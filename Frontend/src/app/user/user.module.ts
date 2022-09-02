import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProjectsComponent } from './complete-projects/complete-projects.component';
import { UsrProjectsComponent } from './usr-projects/usr-projects.component';
import { UserComponent } from './user.component';
import { AllComponent } from './all/all.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {
    path: 'user/dashboard',
    component: UserComponent,
    children: [
      {
        path: '',
        component: AllComponent,
      },
      {
        path: 'projects',
        component: UsrProjectsComponent,
      },
      {
        path: 'projects/complete',
        component: CompleteProjectsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CompleteProjectsComponent,
    UsrProjectsComponent,
    AllComponent,
  ],
  imports: [CommonModule,RouterModule.forChild(userRoutes)],
  exports: [
    CompleteProjectsComponent,
    UsrProjectsComponent,
    AllComponent,
  ],
})
export class UserModule {}
