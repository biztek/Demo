import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseEditreSolutionComponent } from './case-editre-solution.component';

describe('CaseEditreSolutionComponent', () => {
  let component: CaseEditreSolutionComponent;
  let fixture: ComponentFixture<CaseEditreSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseEditreSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEditreSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
