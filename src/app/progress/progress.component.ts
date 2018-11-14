import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;  

}
