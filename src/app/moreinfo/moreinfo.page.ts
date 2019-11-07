import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoreinfoPage implements OnInit {
  data: any;
  title: any;

  constructor( public actrouter: ActivatedRoute, public dataservice: MoviedataService ) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['name'];
      // tslint:disable-next-line: no-string-literal
    }

   );
  }

}
