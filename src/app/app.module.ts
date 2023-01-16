import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComfirstComponent } from './comfirst/comfirst.component';
import { NavcomComponent } from './navcom/navcom.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ComfirstComponent,
    NavcomComponent,
    FootercompComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
