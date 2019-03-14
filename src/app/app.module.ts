import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogobarComponent } from './components/header-logobar/header-logobar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { LandingComponent } from './components/landing/landing.component';

// Material Angular Components
import { MatToolbarModule } from '@angular/material/toolbar';

// API 
import { HttpClientModule } from '@angular/common/http';

// MOCK Api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService as InMemoryDataService } from './services/api/InMemory/inmemory.data.service'

@NgModule({
  declarations: [
    AppComponent,
    // App Components
    HeaderComponent,
    HeaderLogobarComponent,
    HeaderNavbarComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // API Mocking
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    // Material Angular Components
    MatToolbarModule
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
