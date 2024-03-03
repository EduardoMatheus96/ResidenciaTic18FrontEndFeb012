import { FormService } from './../../Services/form.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NoWhitespaceValidator } from '../../Validators/no_white_space.validator';
import { PasswordValidator } from '../../Validators/password.validator';
import { FullNameValidator } from '../../Validators/full_name.validator';
import { PhoneValidator } from '../../Validators/phone.validator';
import { MinAgeValidator } from '../../Validators/min_age.validator';
import { CepValidator } from '../../Validators/cep.validator';
import { IFormData } from 'src/app/Models/formData';
import { FormDataService } from 'src/app/Services/form-data.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {
  form!: FormGroup
  formData: IFormData = {
    user: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    gender: '',
    occupation: '',
    address: '',
    birthday: '',
  }
  minAge: number = 18;
  status!: string;

  constructor(private formDataService: FormDataService, private formService: FormService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'user': new FormControl(null, [Validators.required, NoWhitespaceValidator()]),
      'password': new FormControl(null, [Validators.required, PasswordValidator()]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.required, FullNameValidator()]),
      'phone': new FormControl(null, [Validators.required, PhoneValidator()]),
      'address': new FormControl(null, [Validators.required, CepValidator()]),
      'birthday': new FormControl(null, [Validators.required, MinAgeValidator(this.minAge)]),
      'gender': new FormControl(null),
      'occupation': new FormControl(null),
    });

    this.formDataService.setForm(this.form);

    this.formService.getValuesChanges(this.form).subscribe((formData: IFormData) => {
      this.formData = formData;
    })

    this.formService.getStatusChanges(this.form).subscribe(status => {
      this.status = status;
    });
  }

  onSubmit() {
    alert("Esse é o JSON do formulário: " + JSON.stringify(this.form.value))
  }
}
