import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-concept',
  templateUrl: './content-concept.component.html',
  styleUrls: ['./content-concept.component.css']
})
export class ContentConceptComponent implements OnInit {
  conceptValue;
  definitionValue;
  constructor() { }

  ngOnInit(): void {
  }

  onConceptInputChange() {
    console.log(this.conceptValue);
  }

}
