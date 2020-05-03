import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFileComponent } from './nav-file.component';

describe('NavFileComponent', () => {
  let component: NavFileComponent;
  let fixture: ComponentFixture<NavFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
