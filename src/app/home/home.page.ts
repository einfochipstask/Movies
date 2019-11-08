import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { MoviedataService } from '../moviedata.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // paramsSubscription: Subscription;
  constructor(public http: HttpClient, public dataservice: MoviedataService) {
   // tslint:disable-next-line: no-unused-expression

  }
  date = new Date();
  public data = [];
  

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  this.dataservice.getData().subscribe(result => this.data = result);
  }
  // getData() {
  //   const url = 'assets/data/data.json';
  //   const data: Observable<any> = this.http.get(url);
  //   data.subscribe(result => {
  //       console.log(result);
  //   });
  // tslint:disable-next-line: use-lifecycle-interface
  // ngOnDestroy()
  // // tslint:disable-next-line: one-line
  // {
  //   this.paramsSubscription.unsubscribe();
  // }

}

