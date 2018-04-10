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
      noType:['',Validators.required]

    });

    this.types.obtenirTypes()
    .subscribe(cat => this.typesProblemes = cat,
               error => this.errorMessage = <any>error);    
  }
}
