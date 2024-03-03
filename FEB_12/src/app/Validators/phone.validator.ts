import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PhoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const phone = control.value;
        if (!phone) {
            return null;
        }
        const cleanedPhone = phone.replace(/\D/g, '');
        const phonePattern = /^(\d{2})9?\d{4}\d{4}$/;
        if (!phonePattern.test(cleanedPhone)) {
            return { 'invalidPhone': true };
        }
        return null;
    };
}
