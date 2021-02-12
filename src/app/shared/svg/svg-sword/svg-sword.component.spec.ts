import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSwordComponent } from './svg-sword.component';

describe('SvgSwordComponent', () => {
  let component: SvgSwordComponent;
  let fixture: ComponentFixture<SvgSwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSwordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
