import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(DialogExample1Component, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog2() {
    this.dialog.open(DialogExample2Component, {
      data: {
        animal: 'panda'
      }
    });
  }
  
  openDialog3() {
    const dialogRef = this.dialog.open(DialogExample3Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }  
}

@Component({
  selector: 'dialog-example1-component',
  templateUrl: 'dialog.example1.component.html',
})
export class DialogExample1Component {

  constructor(
    public dialogRef: MatDialogRef<DialogExample1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-example2-component',
  templateUrl: 'dialog.example2.component.html',
})
export class DialogExample2Component {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  selector: 'dialog-example3-component',
  templateUrl: 'dialog.example3.component.html',
})
export class DialogExample3Component {
}
