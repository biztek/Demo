import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorshipTimelessnessReportComponent } from './survivorship-timelessness-report.component';

describe('SurvivorshipTimelessnessReportComponent', () => {
  let component: SurvivorshipTimelessnessReportComponent;
  let fixture: ComponentFixture<SurvivorshipTimelessnessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivorshipTimelessnessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorshipTimelessnessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
