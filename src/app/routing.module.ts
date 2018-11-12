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
