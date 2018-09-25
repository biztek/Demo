import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitCasesComponent } from './transmit-cases.component';

describe('TransmitCasesComponent', () => {
  let component: TransmitCasesComponent;
  let fixture: ComponentFixture<TransmitCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmitCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
