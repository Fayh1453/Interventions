import { VerifierSansEspaces } from "./carateres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator',()=>{
    it('Une chaîne vide est invalide',()=>{
        let control ={value: ""};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Espace']).toBe(false);
    
    });
    it('Une chaine avec 10 espaces est invalide',()=>{
        let control ={value: "          "};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Espace']).toBe(false);
    
    });
    it('Une phrase avec des mots est valide',()=>{
        let control ={value: "Des mots"};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Espace']).toBe(true);
    
    });
    it('Une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide',()=>{
        let control ={value: "   des mots   "};
        let validator = VerifierSansEspaces.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['Espace']).toBe(true);
    
    });
describe('longueurMinimum Validator',()=>{
    it('Une expression avec espace et 2 caractère est invalide',()=>{
        let control ={value: " xx"};
        let validator = VerifierSansEspaces.longeurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(false);
    
    });
    it('Une expression avec 2 espaces et 1 caratère est invalide',()=>{
        let control ={value: "  x"};
        let validator = VerifierSansEspaces.longeurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(false);
    
    });
    it('Une phrase avec 3 espaces et 3 caractères est valide',()=>{
        let control ={value: "   J'aime Angular"};
        let validator = VerifierSansEspaces.longeurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(true);
    
    });
    it('Une phrase avec 5 espaces, 5 caactères et 5 espaces est valide',()=>{
        let control ={value: "     J'aime Angular     "};
        let validator = VerifierSansEspaces.longeurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['Valide']).toBe(true);
    
    });
});
});