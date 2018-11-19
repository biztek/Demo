import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorshipConfigurationComponent } from './survivorship-configuration.component';

describe('SurvivorshipConfigurationComponent', () => {
  let component: SurvivorshipConfigurationComponent;
  let fixture: ComponentFixture<SurvivorshipConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivorshipConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorshipConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
