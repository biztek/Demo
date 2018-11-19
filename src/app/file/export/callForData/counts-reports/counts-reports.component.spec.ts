import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsReportsComponent } from './counts-reports.component';

describe('CountsReportsComponent', () => {
  let component: CountsReportsComponent;
  let fixture: ComponentFixture<CountsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
