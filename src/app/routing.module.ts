import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
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
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { DialogComponent } from './dialog/dialog.component';
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
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';

const routes: Routes = [
  { path: 'icons', component: IconsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'expansion', component: ExpansionComponent },
  { path: 'card', component: CardComponent },
  { path: 'gridlist', component: GridlistComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'list', component: ListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'bottomsheet', component: BottomsheetComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'table', component: TableComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'buttonish', component: ButtonishComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'formfield', component: FormfieldComponent },
  { path: 'input', component: InputComponent },
  { path: 'radiobuttons', component: RadiobuttonsComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'slidetoggle', component: SlidetoggleComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'draganddrop', component: DraganddropComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
