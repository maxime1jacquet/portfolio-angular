import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSvgComponent } from './skill-svg.component';

describe('SkillSvgComponent', () => {
  let component: SkillSvgComponent;
  let fixture: ComponentFixture<SkillSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
