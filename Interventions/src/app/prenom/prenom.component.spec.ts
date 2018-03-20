import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenomComponent } from './prenom.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PrenomComponent', () => {
  let component: PrenomComponent;
  let fixture: ComponentFixture<PrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ PrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('zone PRENOM invalide avec 2 caracteres', () => {
 let zone = component.prenomForm.controls['nomPrenom'];
 zone.setValue('a'.repeat(2));
 expect(zone.valid).toBeFalsy();
});

it('zone PRENOM valide avec 3 caracteres', () => {
  let zone = component.prenomForm.controls['nomPrenom'];
  zone.setValue('a'.repeat(3));
  expect(zone.valid).toBeTruthy();
 });
 
 it('zone PRENOM valide avec 200 caracteres', () => {
  let zone = component.prenomForm.controls['nomPrenom'];
  zone.setValue('a'.repeat(200));
  expect(zone.valid).toBeTruthy();
 });

 it('zone PRENOM invalide avec 1 caracteres', () => {
  let zone = component.prenomForm.controls['nomPrenom'];
  zone.setValue('a');
  expect(zone.valid).toBeFalsy();
 });

 it('zone PRENOM valide avec 50 espaces', () => {
  let zone = component.prenomForm.controls['nomPrenom'];
  zone.setValue(' '.repeat(50));
  expect(zone.valid).toBeTruthy();
 });

 it('zone PRENOM valide avec 2 espaces et 1 caractere', () => {
  let zone = component.prenomForm.controls['nomPrenom'];
  zone.setValue('  a');
  expect(zone.valid).toBeTruthy();
 });

});
