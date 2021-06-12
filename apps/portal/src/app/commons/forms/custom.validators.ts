import { FormControl, ValidationErrors } from '@angular/forms';


export class CustomValidators{
    static emailFormat(control: FormControl): ValidationErrors {
        const value = control.value || '';
        // tslint:disable-next-line:max-line-length
        const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        const isValid = regexp.test(value);
        return isValid ? null : { emailFormat: 'El email debe tener el formato user@domain.ext' };
      }
}
