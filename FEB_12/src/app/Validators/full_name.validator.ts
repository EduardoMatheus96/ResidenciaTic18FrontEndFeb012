import { AbstractControl, ValidatorFn } from '@angular/forms';

export function FullNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const fullName = control.value;
        if (!fullName) {
            return { 'required': true };
        }
        const parts = fullName.trim().split(' ');
        if (parts.length < 2) {
            return { 'invalidFullName': true };
        }
        return null;
    };
}
