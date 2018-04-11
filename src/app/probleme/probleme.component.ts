import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierSansEspaces } from '../shared/carateres-validator';
import { TypeService } from './type.service';
import { IType } from './typeprobleme';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProblemes: IType[];
  errorMessage: string;
  constructor(private fb: FormBuilder, private types: TypeService) { }

  ngOnInit() {

    this.problemeForm = this.fb.group({
     prenom: ['', [VerifierSansEspaces.longeurMinimum(3), VerifierSansEspaces.sansEspaces()]],
      nom: ['', [VerifierSansEspaces.longeurMaximum(50), VerifierSansEspaces.longeurMinimum(1)]],
      noType:['',Validators.required],
      notification:['NePasMeNotifier'],
      typeNotification:this.fb.group({
       telephone:[{value: '', disabled: true}],
       courriel:[{value: '', disabled: true}],
       confirmation:[{value: '', disabled: true}]
      })
    });

    this.types.obtenirTypes()
    .subscribe(cat => this.typesProblemes = cat,
              error => this.errorMessage = <any>error);    
    }


  applicationNotifications(typeNotification: string): void {
    const telephoneControl = this.problemeForm.get('typeNotification.telephone');
   

    const courrielControl = this.problemeForm.get('typeNotification.courriel');
    const confirmationControl = this.problemeForm.get('typeNotification.confirmation');

    if (typeNotification === 'NePasMeNotifier'){
      telephoneControl.clearValidators();
      telephoneControl.reset();
      telephoneControl.disable();

      courrielControl.clearValidators();
      courrielControl.reset();
      courrielControl.disable();

      confirmationControl.clearValidators();
      confirmationControl.reset();
      confirmationControl.disable();
    }
  }
}
