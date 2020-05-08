import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEditAlertModalComponent } from './select-edit-alert-modal.component';

describe('SelectEditAlertModalComponent', () => {
  let component: SelectEditAlertModalComponent;
  let fixture: ComponentFixture<SelectEditAlertModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEditAlertModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEditAlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
