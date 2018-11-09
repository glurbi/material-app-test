import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

  openSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }    
  
  openSnackbarFromComponent() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'snack-bar-custom-component',
  templateUrl: 'snackbar.custom.component.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {

}