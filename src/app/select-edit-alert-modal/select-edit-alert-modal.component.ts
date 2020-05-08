import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-edit-alert-modal',
  templateUrl: './select-edit-alert-modal.component.html',
  styleUrls: ['./select-edit-alert-modal.component.css']
})
export class SelectEditAlertModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
