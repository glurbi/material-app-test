import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ExpansionComponent } from './expansion/expansion.component';

const routes: Routes = [
  { path: 'icons', component: IconsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'expansion', component: ExpansionComponent },
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
