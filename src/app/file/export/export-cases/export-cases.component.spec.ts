import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCasesComponent } from './export-cases.component';

describe('ExportCasesComponent', () => {
  let component: ExportCasesComponent;
  let fixture: ComponentFixture<ExportCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
