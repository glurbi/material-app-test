import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomsheetExampleSheet);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'bottomsheet-example-sheet',
  templateUrl: 'bottomsheet.example.sheet.html',
})
export class BottomsheetExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomsheetExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}