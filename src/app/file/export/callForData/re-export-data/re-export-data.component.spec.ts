import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReExportDataComponent } from './re-export-data.component';

describe('ReExportDataComponent', () => {
  let component: ReExportDataComponent;
  let fixture: ComponentFixture<ReExportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReExportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReExportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
