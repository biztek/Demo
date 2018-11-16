import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadCasesComponent } from './reload-cases.component';

describe('ReloadCasesComponent', () => {
  let component: ReloadCasesComponent;
  let fixture: ComponentFixture<ReloadCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloadCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
