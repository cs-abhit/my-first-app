import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComfirstComponent } from './comfirst/comfirst.component';
import { NavcomComponent } from './navcom/navcom.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    ComfirstComponent,
    NavcomComponent,
    FootercompComponent,
    SearchComponent,
    ProductsComponent],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
