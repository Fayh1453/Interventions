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
    expect(errors['minlength']).toBeTruthy(); 
});

it('zone PRENOM valide avec 3 caracteres', () => {
  let zone = component.problemeForm.controls['nomPrenom'];
  zone.setValue('a'.repeat(3));
  expect(zone.valid).toBeTruthy();
 });
 
 it('zone PRENOM valide avec 200 caracteres', () => {
  let zone = component.problemeForm.controls['nomPrenom'];
  zone.setValue('a'.repeat(200));
  expect(zone.valid).toBeTruthy();
 });

 it('zone PRENOM valide avec 0 caracteres', () => {
  let zone = component.problemeForm.controls['nomPrenom'];
  zone.setValue('');
  expect(zone.valid).toBeTruthy();
 });

 it('zone PRENOM invalide avec 1 caracteres', () => {
  let zone = component.problemeForm.controls['nomPrenom'];
  zone.setValue('a');
  expect(zone.valid).toBeFalsy();
 });

 it('zone PRENOM valide avec 50 espaces', () => {
  let zone = component.problemeForm.controls['nomPrenom'];
  zone.setValue(' '.repeat(50));
  expect(zone.valid).toBeTruthy();
 });

 it('zone PRENOM valide avec 2 espaces et 1 caractere', () => {
  let zone = component.problemeForm.controls['nomPrenom'];
  zone.setValue('  a');
  expect(zone.valid).toBeTruthy();
 });
});