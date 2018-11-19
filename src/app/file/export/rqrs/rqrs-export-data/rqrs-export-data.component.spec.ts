import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RqrsExportDataComponent } from './rqrs-export-data.component';

describe('RqrsExportDataComponent', () => {
  let component: RqrsExportDataComponent;
  let fixture: ComponentFixture<RqrsExportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RqrsExportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RqrsExportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
