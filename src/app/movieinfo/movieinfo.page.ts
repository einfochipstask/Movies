import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.page.html',
  styleUrls: ['./movieinfo.page.scss'],
})
export class MovieinfoPage implements OnInit {
 date = new Date();
  title: any;
  data: any;
 constructor( public dataservice: MoviedataService, public actrouter: ActivatedRoute) {
  // tslint:disable-next-line: no-unused-expression

 }

  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
    // tslint:disable-next-line: deprecation
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['title'];
      // tslint:disable-next-line: no-string-literal
    });
  }

}
