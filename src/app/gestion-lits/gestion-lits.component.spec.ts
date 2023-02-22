import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLitsComponent } from './gestion-lits.component';

describe('GestionLitsComponent', () => {
  let component: GestionLitsComponent;
  let fixture: ComponentFixture<GestionLitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
