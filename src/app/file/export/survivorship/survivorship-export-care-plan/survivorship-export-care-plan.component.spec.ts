import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorshipExportCarePlanComponent } from './survivorship-export-care-plan.component';

describe('SurvivorshipExportCarePlanComponent', () => {
  let component: SurvivorshipExportCarePlanComponent;
  let fixture: ComponentFixture<SurvivorshipExportCarePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivorshipExportCarePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorshipExportCarePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
