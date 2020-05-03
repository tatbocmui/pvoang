import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConceptExampleComponent } from './content-concept-example.component';

describe('ContentConceptExampleComponent', () => {
  let component: ContentConceptExampleComponent;
  let fixture: ComponentFixture<ContentConceptExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentConceptExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentConceptExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
