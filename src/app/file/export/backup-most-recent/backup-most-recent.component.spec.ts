import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupMostRecentComponent } from './backup-most-recent.component';

describe('BackupMostRecentComponent', () => {
  let component: BackupMostRecentComponent;
  let fixture: ComponentFixture<BackupMostRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupMostRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupMostRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
