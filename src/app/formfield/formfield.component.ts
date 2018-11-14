import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent {

  options: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  options2: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.options2 = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }  
  
}
