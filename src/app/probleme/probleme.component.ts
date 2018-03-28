import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierSansEspaces } from '../shared/carateres-validator';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.problemeForm = this.fb.group({
      nomPrenom: ['', [VerifierSansEspaces.longeurMinimum(3), VerifierSansEspaces.sansEspaces()]]

    });
  }
}
