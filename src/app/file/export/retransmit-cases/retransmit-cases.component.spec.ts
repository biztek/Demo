import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetransmitCasesComponent } from './retransmit-cases.component';

describe('RetransmitCasesComponent', () => {
  let component: RetransmitCasesComponent;
  let fixture: ComponentFixture<RetransmitCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetransmitCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetransmitCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
