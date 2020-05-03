import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConceptComponent } from './nav-concept.component';

describe('NavConceptComponent', () => {
  let component: NavConceptComponent;
  let fixture: ComponentFixture<NavConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
