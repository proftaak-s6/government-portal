// Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Routing and AppComponent
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Services
import { BrpService } from "src/services/brp.service";
import { CarService } from "src/services/car.service";

// Components
import { HeaderComponent } from "./components/header/header.component";
import { HeaderLogobarComponent } from "./components/header-logobar/header-logobar.component";
import { HeaderNavbarComponent } from "./components/header-navbar/header-navbar.component";

// Landing
import { LandingComponent } from "./components/landing/landing.component";

// Car-management
import { CarManagementComponent } from "./components/car-management/car-management.component";
import { CarManagementCreateDialogComponent } from "./components/car-management/car-management-create-dialog/car-management-create-dialog.component";
import { CarManagementDeleteDialogComponent } from "./components/car-management/car-management-delete-dialog/car-management-delete-dialog.component";
import { CarManagementAssignOwnerDialogComponent } from "./components/car-management/car-management-assign-owner-dialog/car-management-assign-owner-dialog.component";

// Tracker-management
import { TrackerManagementComponent } from "./components/tracker-management/tracker-management.component";
import { TrackerManagementDialogComponent } from "./components/tracker-management/tracker-management-dialog/tracker-management-dialog.component";
import { TrackerManagementDeleteDialogComponent } from "./components/tracker-management/tracker-management-delete-dialog/tracker-management-delete-dialog.component";

// Material Angular Components
import {
  MatAutocompleteModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
} from "@angular/material";

import { CarManagementAssignTrackerDialogComponent } from './components/car-management/car-management-assign-tracker-dialog/car-management-assign-tracker-dialog.component';
import { PriceManagementComponent } from './components/price-management/price-management.component';
import { PriceManagementEditDialogComponent } from './components/price-management/price-management-edit-dialog/price-management-edit-dialog.component';
import { PriceManagementHistoryDialogComponent } from './components/price-management/price-management-history-dialog/price-management-history-dialog.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    // App Components
    HeaderComponent,
    HeaderLogobarComponent,
    HeaderNavbarComponent,
    LandingComponent,
    CarManagementComponent,
    CarManagementCreateDialogComponent,
    CarManagementDeleteDialogComponent,
    CarManagementAssignOwnerDialogComponent,
    TrackerManagementComponent,
    TrackerManagementDialogComponent,
    TrackerManagementDeleteDialogComponent,
    CarManagementAssignTrackerDialogComponent,
    PriceManagementComponent,
    PriceManagementEditDialogComponent,
    PriceManagementHistoryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // Material Angular Components
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  entryComponents: [
    CarManagementCreateDialogComponent,
    CarManagementDeleteDialogComponent,
    CarManagementAssignOwnerDialogComponent,
    TrackerManagementDialogComponent,
    TrackerManagementDeleteDialogComponent,
    CarManagementAssignTrackerDialogComponent,
    PriceManagementEditDialogComponent,
    PriceManagementHistoryDialogComponent
  ],
  providers: [
    // Disabled to enable external API calls
    // InMemoryDataService,
    DatePipe,
    BrpService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
