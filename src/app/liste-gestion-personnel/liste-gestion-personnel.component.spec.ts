import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGestionPersonnelComponent } from './liste-gestion-personnel.component';

describe('ListeGestionPersonnelComponent', () => {
  let component: ListeGestionPersonnelComponent;
  let fixture: ComponentFixture<ListeGestionPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGestionPersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeGestionPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
