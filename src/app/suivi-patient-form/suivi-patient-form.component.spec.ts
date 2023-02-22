import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPatientFormComponent } from './suivi-patient-form.component';

describe('SuiviPatientFormComponent', () => {
  let component: SuiviPatientFormComponent;
  let fixture: ComponentFixture<SuiviPatientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviPatientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviPatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
