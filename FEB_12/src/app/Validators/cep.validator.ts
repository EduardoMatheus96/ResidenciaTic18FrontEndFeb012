import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CepValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const cep = control.value;
        const cepPattern = /^[0-9]{5}-?[0-9]{3}$/;
        if (!cepPattern.test(cep)) {
            return { 'invalidCep': true };
        }
        return null;
    };
}
