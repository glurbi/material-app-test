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
import { BottomsheetComponent, BottomsheetExampleSheet } from './bottomsheet/bottomsheet.component';
import { DialogComponent, DialogExample1Component, DialogExample2Component, DialogExample3Component } from './dialog/dialog.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TableComponent } from './table/table.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonishComponent } from './buttonish/buttonish.component';
import { ProgressComponent } from './progress/progress.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { InputComponent } from './input/input.component';
import { RadiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';

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
    BottomsheetComponent,
    BottomsheetExampleSheet,
    DialogComponent,
    DialogExample1Component,
    DialogExample2Component,
    DialogExample3Component,
    PaginatorComponent,
    TableComponent,
    ButtonsComponent,
    ButtonishComponent,
    ProgressComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobuttonsComponent,
    SelectComponent,
    SliderComponent,
    SlidetoggleComponent,
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
    BottomsheetExampleSheet,
    PizzaPartyComponent,
    DialogExample1Component,
    DialogExample2Component,
    DialogExample3Component,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [],
})
export class AppModule { }
