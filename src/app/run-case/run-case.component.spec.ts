import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCaseComponent } from './run-case.component';

describe('RunCaseComponent', () => {
  let component: RunCaseComponent;
  let fixture: ComponentFixture<RunCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
