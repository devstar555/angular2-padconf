import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app.routing';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
