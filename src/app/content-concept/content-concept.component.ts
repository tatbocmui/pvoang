import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import {Concept} from '../concept';
import {DeleteAlertModalComponent} from '../delete-alert-modal/delete-alert-modal.component';
@Component({
  selector: 'app-content-concept',
  templateUrl: './content-concept.component.html',
  styleUrls: ['./content-concept.component.css']
})
export class ContentConceptComponent implements OnInit {
  modalOptions: NgbModalOptions;
  constructor(
      private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }
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
    const modalRef = this.modalService.open(DeleteAlertModalComponent);
    modalRef.componentInstance.numberConnectedExample = 0;
    modalRef.componentInstance.numberConnectedConcept = 0;
    modalRef.componentInstance.conceptName = 'test';
  }
}
