import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilInfirmiersComponent } from './accueil-infirmiers.component';

describe('AccueilInfirmiersComponent', () => {
  let component: AccueilInfirmiersComponent;
  let fixture: ComponentFixture<AccueilInfirmiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilInfirmiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilInfirmiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
