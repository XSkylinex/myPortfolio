import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProjectsPageComponent } from './academic-projects-page.component';

describe('AcademicProjectsPageComponent', () => {
  let component: AcademicProjectsPageComponent;
  let fixture: ComponentFixture<AcademicProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicProjectsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
