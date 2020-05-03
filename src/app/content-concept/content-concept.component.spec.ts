import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConceptComponent } from './content-concept.component';

describe('ContentConceptComponent', () => {
  let component: ContentConceptComponent;
  let fixture: ComponentFixture<ContentConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
