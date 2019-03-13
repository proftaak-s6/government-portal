import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogobarComponent } from './components/header-logobar/header-logobar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';

// Material Angular Components
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    // App Components
    HeaderComponent,
    HeaderLogobarComponent,
    HeaderNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Material Angular Components
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
