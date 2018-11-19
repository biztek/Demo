import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchEditsComponent } from './batch-edits.component';

describe('BatchEditsComponent', () => {
  let component: BatchEditsComponent;
  let fixture: ComponentFixture<BatchEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
