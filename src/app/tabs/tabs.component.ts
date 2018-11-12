import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);
  
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });    
   }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  ngOnInit() {
  }

}
