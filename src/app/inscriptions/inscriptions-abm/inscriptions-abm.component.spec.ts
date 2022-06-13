import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsAbmComponent } from './inscriptions-abm.component';

describe('InscriptionsAbmComponent', () => {
  let component: InscriptionsAbmComponent;
  let fixture: ComponentFixture<InscriptionsAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionsAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
