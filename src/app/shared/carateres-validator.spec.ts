import { VerifierSansEspaces } from "./carateres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator',()=>{
    it('Une chaîne vide est invalide',()=>{
        let control ={value: ""};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(true);
    
    });
    it('Une chaine avec 10 espaces est invalide',()=>{
        let control ={value: "          "};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(true);
    
    });
    it('Une phrase avec des mots est valide',()=>{
        let control ={value: "Des mots"};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(true);
    
    });
    it('Une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide',()=>{
        let control ={value: "   des mots   "};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(true);
    
    });
});