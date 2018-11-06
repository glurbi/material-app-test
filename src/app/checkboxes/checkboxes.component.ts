import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
