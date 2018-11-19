import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneButtonExportComponent } from './one-button-export.component';

describe('OneButtonExportComponent', () => {
  let component: OneButtonExportComponent;
  let fixture: ComponentFixture<OneButtonExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneButtonExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneButtonExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
