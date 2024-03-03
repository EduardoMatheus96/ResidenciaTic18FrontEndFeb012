import { AbstractControl, ValidatorFn } from '@angular/forms';

export function MinAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const birthday = control.value;
        if (!birthday) {
            return null;
        }
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < minAge) {
            return { 'minAge': { requiredAge: minAge, actualAge: age } };
        }
        return null;
    };
}
