import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, AngularFontAwesomeModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  it('zone PRENOM invalide avec 2 caracteres', () => {
    let errors ={};
    let zone = component.problemeForm.get('nomPrenom');
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['Valide']).toBeFalsy(); 
});

it('zone PRENOM valide avec 3 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('nomPrenom');
  zone.setValue('a'.repeat(3));
  errors = zone.errors || {};
  expect(errors['Valide']).toBeTruthy(); 
 });
 
 it('zone PRENOM valide avec 200 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('nomPrenom');
  zone.setValue('a'.repeat(200));
  errors = zone.errors || {};
  expect(errors['Valide']).toBeTruthy(); 
 });

 it('zone PRENOM invalide avec 0 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('nomPrenom');
  zone.setValue('');
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });

 it('zone PRENOM invalide avec 1 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('nomPrenom');
  zone.setValue('a');
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });

 it('zone PRENOM invalide avec 50 espaces', () => {
  let errors ={};
  let zone = component.problemeForm.get('nomPrenom');
  zone.setValue(' '.repeat(50));
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });

 it('zone PRENOM invalide avec 2 espaces et 1 caractere', () => {
  let errors ={};
  let zone = component.problemeForm.get('nomPrenom');
  zone.setValue('  a');
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });
});
