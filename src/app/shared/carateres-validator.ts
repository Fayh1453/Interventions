import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierSansEspaces {
    static sansEspaces(): ValidatorFn { 
        return(c: AbstractControl): { [key: string]: boolean } | null => {
           if ((c.value ||"").trim().length === 0){
               return { 'Espace' : false };
           }
            return { 'Espace' : true };
        };
    }
    static longeurMinimum(min: number): ValidatorFn { 
        return(c: AbstractControl): { [key: string]: boolean } | null => {
           if ((c.value ||"").trim().length < min){
               return { 'Valide' : false };
           }
            return { 'Valide' : true };
        };
    }

    static longeurMaximum(max: number): ValidatorFn { 
        return(c: AbstractControl): { [key: string]: boolean } | null => {
           if ((c.value ||"").trim().length > max){
               return { 'LongMax' : false };
           }
            return { 'LongMax' : true };
        };
    }
    

}