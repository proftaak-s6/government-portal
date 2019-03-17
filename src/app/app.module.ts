import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogobarComponent } from './components/header-logobar/header-logobar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarManagementComponent } from './components/car-management/car-management.component';
import { OwnerManagementComponent } from './components/owner-management/owner-management.component';
import { OwnerManagementDeleteDialog } from './components/owner-management/owner-management-delete-dialog/owner-management-delete-dialog.component';
import { OwnerManagementAddEditDialog } from './components/owner-management/owner-management-addedit-dialog/owner-management-addedit-dialog.component'

// Material Angular Components
import {
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
  MatNativeDateModule
} from '@angular/material';

// API 
import { HttpClientModule } from '@angular/common/http';

// MOCK Api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService as InMemoryDataService } from './services/api/InMemory/inmemory.data.service';
import { CarManagementDeleteDialogComponent } from './components/car-management/car-management-delete-dialog/car-management-delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    // App Components
    HeaderComponent,
    HeaderLogobarComponent,
    HeaderNavbarComponent,
    LandingComponent,
    CarManagementComponent,
    OwnerManagementComponent,
    OwnerManagementAddEditDialog,
    OwnerManagementDeleteDialog,
    CarManagementDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // API Mocking
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    // Material Angular Components
    BrowserAnimationsModule,
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
    MatNativeDateModule
  ],
  entryComponents: [
    CarManagementDeleteDialogComponent,
    OwnerManagementAddEditDialog,
    OwnerManagementDeleteDialog
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
