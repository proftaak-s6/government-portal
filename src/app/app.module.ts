import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogobarComponent } from './components/header-logobar/header-logobar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
// Landing
import { LandingComponent } from './components/landing/landing.component';
// Car-management
import { CarManagementComponent } from './components/car-management/car-management.component';
import { CarManagementCreateDialogComponent } from './components/car-management/car-management-create-dialog/car-management-create-dialog.component';
import { CarManagementDeleteDialogComponent } from './components/car-management/car-management-delete-dialog/car-management-delete-dialog.component';
// Owner-management
import { OwnerManagementComponent } from './components/owner-management/owner-management.component';
import { OwnerManagementDialogComponent } from './components/owner-management/owner-management-dialog/owner-management-dialog.component'
import { OwnerManagementDeleteDialogComponent } from './components/owner-management/owner-management-delete-dialog/owner-management-delete-dialog.component';
import { OwnerManagementAssignCarDialogComponent } from './components/owner-management/owner-management-assigncar-dialog/owner-management-assigncar-dialog.component';
// Tracker-management
import { TrackerManagementComponent } from './components/tracker-management/tracker-management.component';
import { TrackerManagementDialogComponent } from './components/tracker-management/tracker-management-dialog/tracker-management-dialog.component';
import { TrackerManagementDeleteDialogComponent } from './components/tracker-management/tracker-management-delete-dialog/tracker-management-delete-dialog.component';

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
} from '@angular/material';

// API
import { HttpClientModule } from '@angular/common/http';

// MOCK Api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService as InMemoryDataService } from './services/api/InMemory/inmemory.data.service';
import { CarManagementAssignTrackerDialogComponent } from './components/car-management/car-management-assign-tracker-dialog/car-management-assign-tracker-dialog.component';


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
    OwnerManagementComponent,
    OwnerManagementDialogComponent,
    OwnerManagementDeleteDialogComponent,
    OwnerManagementAssignCarDialogComponent,
    TrackerManagementComponent,
    TrackerManagementDialogComponent,
    TrackerManagementDeleteDialogComponent,
    CarManagementAssignTrackerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // API Mocking
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
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
    OwnerManagementDialogComponent,
    OwnerManagementDeleteDialogComponent,
    OwnerManagementAssignCarDialogComponent,
    TrackerManagementDialogComponent,
    TrackerManagementDeleteDialogComponent,
    CarManagementAssignTrackerDialogComponent
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
