import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProjectsComponent } from './complete-projects/complete-projects.component';
import { UsrProjectsComponent } from './usr-projects/usr-projects.component';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [
    CompleteProjectsComponent,
    UsrProjectsComponent,
    AllComponent,
  ],
  imports: [CommonModule],
  exports: [
    CompleteProjectsComponent,
    UsrProjectsComponent,
    AllComponent,
  ],
})
export class UserModule {}
