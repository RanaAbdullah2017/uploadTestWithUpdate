import { FormControl } from '@angular/forms';

export class AgeValidator {

    static isValid(control: FormControl): any {

      if (control.value >=5){ return null; }

      return {"يجب ان يكون طول رقم المرور اكثر من 5 حروف ": true};
      
    }

}