import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousesContainerComponent } from './couses-container.component';

describe('CousesContainerComponent', () => {
  let component: CousesContainerComponent;
  let fixture: ComponentFixture<CousesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CousesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CousesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
