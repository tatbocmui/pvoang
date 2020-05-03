import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-concept',
  templateUrl: './nav-concept.component.html',
  styleUrls: ['./nav-concept.component.css']
})
export class NavConceptComponent implements OnInit {

  constructor() { }
  active = 1;
  ngOnInit(): void {
  }

}
