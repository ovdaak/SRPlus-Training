import { ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

export class DateValidator {
    static inDateRange(from: Date, to: Date): ValidatorFn {
        return (formControl: FormControl): ValidationErrors => {
            const dateString: string = String(formControl.value).split('T')[0];
            const [year, month, day] = dateString.split('-');
            const date: Date = new Date(Number(year), Number(month) - 1, Number(day));

            if (from < date && to > date) {
                return null;
            } else {
                return {inDateRange: true};
            }
        };
    }
}
