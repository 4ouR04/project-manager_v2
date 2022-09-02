import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './fallback/fallback.component';


const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
