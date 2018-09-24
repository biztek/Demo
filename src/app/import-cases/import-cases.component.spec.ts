import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCasesComponent } from './import-cases.component';

describe('ImportCasesComponent', () => {
  let component: ImportCasesComponent;
  let fixture: ComponentFixture<ImportCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
