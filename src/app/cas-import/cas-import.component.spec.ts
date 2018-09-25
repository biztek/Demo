import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasImportComponent } from './cas-import.component';

describe('CasImportComponent', () => {
  let component: CasImportComponent;
  let fixture: ComponentFixture<CasImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
