import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  numeric?: number;
  text_message: string = '';
  mail: string = '';
  file: string = '';
  myForm: FormGroup;
  radioBtn: boolean = true;
  radioBtn2: boolean = true;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      numeric: [''],
      text_message: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Пожалуйста, выберите файл в формате PDF.');
        event.target.value = '';
        this.file = '';
      } else {
        this.file = file.name;
      }
    }
  }

  onRadioChange(option: string) {
    if (option === 'radioBtn') {
      this.radioBtn = true;
      this.radioBtn2 = false;
    } else if (option === 'radioBtn2') {
      this.radioBtn = false;
      this.radioBtn2 = true;
    }
  }
}
