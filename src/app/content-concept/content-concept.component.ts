import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


import {Concept} from '../concept';
import {DeleteAlertModalComponent} from '../delete-alert-modal/delete-alert-modal.component';
import {LoadConceptScrollBarService} from '../service/load-concept-scroll-bar.service';
@Component({
  selector: 'app-content-concept',
  templateUrl: './content-concept.component.html',
  styleUrls: ['./content-concept.component.css']
})
export class ContentConceptComponent implements OnInit {
  modalOptions: NgbModalOptions;
  public concepts = [];
  conceptValue;
  definitionValue;
  imageUrlValue;
  public editConcept;
  public editConceptFormEnable = false;
  public editConceptObject = new Concept(0, '', '', '');
  public selectConceptObject = new Concept(0, '', '', '');



  constructor(
      private modalService: NgbModal,
      private loadConceptScrollBarService: LoadConceptScrollBarService
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit(): void {
    this.loadConceptScrollBarService.getConcepts().subscribe(data => this.concepts = data);
  }

  onConceptInputChange() {
    console.log(this.conceptValue);
  }
  onSubmit() {
    this.concepts.push({"id": this.concepts.length - 1,
      "conceptName": this.conceptValue, "definition": this.definitionValue, "imgUrl": this.imageUrlValue});
  }


  deleteConcept() {
    const modalRef = this.modalService.open(DeleteAlertModalComponent);
    modalRef.componentInstance.numberConnectedExample = 0;
    modalRef.componentInstance.numberConnectedConcept = 0;
    modalRef.componentInstance.conceptName = 'test';
  }

  editSelectedConcept(){
    this.editConceptFormEnable = true;
    let i;
    for (i = 0; i < this.concepts.length; i++) {
      if (this.editConcept === this.concepts[i].conceptName){
        this.editConceptObject.conceptID = this.concepts[i].id;
        this.editConceptObject.conceptName = this.concepts[i].conceptName;
        this.editConceptObject.conceptDefinition = this.concepts[i].definition;
        this.editConceptObject.conceptImageUrl = this.concepts[i].imgUrl;
      }
    }
  }

  updateSelectedConcept(){
      this.editConceptFormEnable = false;
      let i;
      for (i = 0; i < this.concepts.length; i++) {
        if (this.editConcept === this.concepts[i].conceptName){
          this.concepts[i].definition = this.editConceptObject.conceptDefinition;
          this.concepts[i].conceptName = this.editConceptObject.conceptName;
        }
      }
    }


  showDefinition() {
    let i;
    for (i = 0; i < this.concepts.length; i++) {
      if (this.editConcept === this.concepts[i].conceptName){
        this.selectConceptObject.conceptID = this.concepts[i].id;
        this.selectConceptObject.conceptName = this.concepts[i].conceptName;
        this.selectConceptObject.conceptDefinition = this.concepts[i].definition;
        this.selectConceptObject.conceptImageUrl = this.concepts[i].imgUrl;
      }
    }
  }
}
