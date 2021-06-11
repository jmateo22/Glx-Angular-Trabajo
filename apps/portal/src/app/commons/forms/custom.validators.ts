import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class CustomValidators{
      
      static emailFormat(control: FormControl): ValidationErrors {
        const value = control.value || '';
        const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    
        const isValid = regexp.test(value);
    
        return isValid ? null : { emailFormat: 'El email debe tener el formato user@domain.ext' }
      }

}