import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IConcept} from '../iconcept';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadConceptScrollBarService {
  // private url = 'http://172.28.244.209:8080/api/concept';
  private url = 'assets/data/concepts.json';
  constructor(private http: HttpClient) { }
  getConcepts(): Observable<IConcept[]>{
    return this.http.get<IConcept[]>(this.url);
  }
}
