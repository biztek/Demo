import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RqrsBatchEditComponent } from './rqrs-batch-edit.component';

describe('RqrsBatchEditComponent', () => {
  let component: RqrsBatchEditComponent;
  let fixture: ComponentFixture<RqrsBatchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RqrsBatchEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RqrsBatchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
