import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Concept} from '../concept';
@Component({
  selector: 'app-content-concept',
  templateUrl: './content-concept.component.html',
  styleUrls: ['./content-concept.component.css']
})
export class ContentConceptComponent implements OnInit {

  constructor() { }
  conceptValue;
  definitionValue;
  conceptModel = new Concept('', '');


  ngOnInit(): void {
  }

  onConceptInputChange() {
    console.log(this.conceptValue);
  }
  onSubmit() {
  }
  newConcept() {
    this.conceptModel = new Concept('', '');
  }

  deleteConcept() {

  }
}
