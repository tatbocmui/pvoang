import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteConceptService {
  private url = '/assets/data/concepts.json';
  constructor(private http: HttpClient) { }

  deleteConcept(conceptID: number): Observable<{}>{
    this.url = 'http://172.28.231.188/${conceptID}';
    return this.http.delete(this.url);
  }
}
