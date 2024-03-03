import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const password = control.value;
        if (!password || password.length < 4) {
            return { 'minLength': true };
        }
        if (!/[A-Z]/.test(password)) {
            return { 'uppercase': true };
        }
        if (!/[\W_]/.test(password)) {
            return { 'symbol': true };
        }
        return null;
    };
}
