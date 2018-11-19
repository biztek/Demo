import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorshipTemplateEditorComponent } from './survivorship-template-editor.component';

describe('SurvivorshipTemplateEditorComponent', () => {
  let component: SurvivorshipTemplateEditorComponent;
  let fixture: ComponentFixture<SurvivorshipTemplateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivorshipTemplateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorshipTemplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
