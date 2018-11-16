import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFollowUpComponent } from './shared-follow-up.component';

describe('SharedFollowUpComponent', () => {
  let component: SharedFollowUpComponent;
  let fixture: ComponentFixture<SharedFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
