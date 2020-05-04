import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-alert-modal',
  templateUrl: './delete-alert-modal.component.html',
  styleUrls: ['./delete-alert-modal.component.css']
})
export class DeleteAlertModalComponent implements OnInit {
  @Input() numberConnectedExample;
  @Input() numberConnectedConcept;
  @Input() conceptName;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
