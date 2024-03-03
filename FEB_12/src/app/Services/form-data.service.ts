import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData: any = {
    values: {},
    statusChange: []
  };

  constructor() { }

  setForm(form: FormGroup){
    form.valueChanges.subscribe((value) => {
      this.formData.values = value
      this.formData.statusChange.push(value)
    })
  }

  getFormData(){
    return this.formData
  }

  resetFormData(){
    this.formData = {
      values: {},
      statusChange: []
    };
  }
}
