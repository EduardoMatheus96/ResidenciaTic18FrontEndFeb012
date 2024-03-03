import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getValuesChanges(form: FormGroup): Observable<any>{
    return form.valueChanges;
  }

  getStatusChanges(form: FormGroup): Observable<any>{
    return form.statusChanges;
  }
}
