import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-app-test';
  @ViewChild('menu') menu;

  toggleMenu() {
    this.menu.toggle();
  }
}
