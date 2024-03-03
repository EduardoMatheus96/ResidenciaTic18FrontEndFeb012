import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value && /\s/.test(control.value)) {
            return { 'whitespace': true };
        }
        return null;
    };
}
