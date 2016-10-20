import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home.component';
import { AuxComponent } from './pages/aus.component';
import { OutletComponent } from './shared/outlet.component';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports: [BrowserModule, routing],
  entryComponents: [OutletComponent],
  declarations: [AppComponent, HomeComponent, AuxComponent, OutletComponent],
  bootstrap: [AppComponent],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule { }
