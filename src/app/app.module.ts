import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { IconsComponent } from './icons/icons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SnackbarComponent, PizzaPartyComponent } from './snackbar/snackbar.component';
import { ExpansionComponent } from './expansion/expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    TooltipsComponent,
    CheckboxesComponent,
    SnackbarComponent,
    PizzaPartyComponent,
    ExpansionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
  ],
  entryComponents: [
    SnackbarComponent,
    PizzaPartyComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [],
})
export class AppModule { }
