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
import { CardComponent } from './card/card.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeComponent } from './tree/tree.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    TooltipsComponent,
    CheckboxesComponent,
    SnackbarComponent,
    PizzaPartyComponent,
    ExpansionComponent,
    CardComponent,
    GridlistComponent,
    StepperComponent,
    TabsComponent,
    TreeComponent,
    ListComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
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
