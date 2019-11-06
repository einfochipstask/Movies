import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Moviedata} from './movie';
@Injectable({
  providedIn: 'root'
})
export class MoviedataService {


  constructor(public http: HttpClient ) {}
  getData(): Observable<Moviedata[]> {
    const url = 'assets/data/data.json';
    return this.http.get<Moviedata[]>(url);
  }

}
