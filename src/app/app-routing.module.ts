import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CarManagementComponent } from './components/car-management/car-management.component';
import { OwnerManagementComponent } from './components/owner-management/owner-management.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'auto-beheer', component: CarManagementComponent},
  { path: 'rekeningrijder-beheer', component: OwnerManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
