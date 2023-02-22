import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePatientFormComponent } from './fiche-patient-form.component';

describe('FichePatientFormComponent', () => {
  let component: FichePatientFormComponent;
  let fixture: ComponentFixture<FichePatientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichePatientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichePatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
