import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  data: any;
  title: any;

  constructor(public dataservice: MoviedataService , public actrouter: ActivatedRoute) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['title'];
      // tslint:disable-next-line: no-string-literal
    }

   );
  }

}
