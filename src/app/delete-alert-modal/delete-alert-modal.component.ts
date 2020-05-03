import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-alert-modal',
  templateUrl: './delete-alert-modal.component.html',
  styleUrls: ['./delete-alert-modal.component.css']
})
export class DeleteAlertModalComponent implements OnInit {
  numberConnectedExample = 0;
  numberConnectedConcept = 0;
  conceptName = 'Test';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
