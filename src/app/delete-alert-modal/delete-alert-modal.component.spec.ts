import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlertModalComponent } from './delete-alert-modal.component';

describe('DeleteAlertModalComponent', () => {
  let component: DeleteAlertModalComponent;
  let fixture: ComponentFixture<DeleteAlertModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAlertModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
