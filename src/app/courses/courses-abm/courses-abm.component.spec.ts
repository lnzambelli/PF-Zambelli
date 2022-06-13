import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAbmComponent } from './courses-abm.component';

describe('CoursesAbmComponent', () => {
  let component: CoursesAbmComponent;
  let fixture: ComponentFixture<CoursesAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
