import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCoursesComponent } from './personal-courses.component';

describe('PersonalCoursesComponent', () => {
  let component: PersonalCoursesComponent;
  let fixture: ComponentFixture<PersonalCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
