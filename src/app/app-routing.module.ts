import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { CarManagementComponent } from "./components/car-management/car-management.component";
import { TrackerManagementComponent } from "./components/tracker-management/tracker-management.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "auto-beheer", component: CarManagementComponent },
  { path: "tracker-beheer", component: TrackerManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
