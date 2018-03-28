import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierSansEspaces {
    static sansEspaces(): ValidatorFn { 
        return(c: AbstractControl): { [key: string]: boolean } | null => {
           if ((c.value ||"").trim().lenght === 0){
               return { 'Valide' : false };
           }
            return { 'Valide' : true };
        };
    }
}