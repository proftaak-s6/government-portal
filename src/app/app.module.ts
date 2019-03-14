import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarManagementComponent } from './components/car-management/car-management.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogobarComponent } from './components/header-logobar/header-logobar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';

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
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    // App Components
    HeaderComponent,
    HeaderLogobarComponent,
    HeaderNavbarComponent,
    LandingComponent,
    CarManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
