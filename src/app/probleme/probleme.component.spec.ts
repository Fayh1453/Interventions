import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TypeService } from './type.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, AngularFontAwesomeModule, HttpClientModule],
      declarations: [ ProblemeComponent ],
      providers:[TypeService ]
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
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['Valide']).toBeFalsy(); 
});

it('zone PRENOM valide avec 3 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('prenom');
  zone.setValue('a'.repeat(3));
  errors = zone.errors || {};
  expect(errors['Valide']).toBeTruthy(); 
 });
 
 it('zone PRENOM valide avec 200 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('prenom');
  zone.setValue('a'.repeat(200));
  errors = zone.errors || {};
  expect(errors['Valide']).toBeTruthy(); 
 });

 it('zone PRENOM invalide avec 0 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('prenom');
  zone.setValue('');
  errors = zone.errors || {};
  expect(errors['Espace']).toBeFalsy(); 
 });

 it('zone PRENOM invalide avec 1 caracteres', () => {
  let errors ={};
  let zone = component.problemeForm.get('prenom');
  zone.setValue('a');
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });

 it('zone PRENOM invalide avec 50 espaces', () => {
  let errors ={};
  let zone = component.problemeForm.get('prenom');
  zone.setValue(' '.repeat(50));
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });

 it('zone PRENOM invalide avec 2 espaces et 1 caractere', () => {
  let errors ={};
  let zone = component.problemeForm.get('prenom');
  zone.setValue('  a');
  errors = zone.errors || {};
  expect(errors['Valide']).toBeFalsy(); 
 });

 it('zone TELEPHONE est desactivee quand ne pas me notifier', () => {
  component.applicationNotifications('NePasMeNotifier');

  let zone = component.problemeForm.get('typeNotification.telephone')
  expect(zone.status).toEqual('DISABLED');

 });

 it('zone TELEPHONE est vide quand ne pas me notifier', () => {
  component.applicationNotifications('NePasMeNotifier');
  let zone = component.problemeForm.get('typeNotification.telephone')

  expect(zone.value).toBeNull(); 
});

it('zone ADRESSE COURRIEL est desactivee quand ne pas me notifier', () => {
  component.applicationNotifications('NePasMeNotifier');

  let zone = component.problemeForm.get('typeNotification.courriel')
  expect(zone.status).toEqual('DISABLED');
});

it('zone ADRESSE COURRIEL est vide quand ne pas me notifier', () => {
  component.applicationNotifications('NePasMeNotifier');
  let zone = component.problemeForm.get('typeNotification.courriel')

  expect(zone.value).toBeNull(); 
});

it('zone CONFIRMER COURRIEL est desactivee quand ne pas me notifier', () => {
  component.applicationNotifications('NePasMeNotifier');

  let zone = component.problemeForm.get('typeNotification.confirmation')
  expect(zone.status).toEqual('DISABLED');
});

it('zone CONFIRMER COURRIEL est vide quand ne pas me notifier', () => {
  component.applicationNotifications('NePasMeNotifier');
  let zone = component.problemeForm.get('typeNotification.confirmation')

  expect(zone.value).toBeNull(); 
});
});
