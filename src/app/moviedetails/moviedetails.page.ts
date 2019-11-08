import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {

  date = new Date();
  public data = [];
  // tslint:disable-next-line: max-line-length
  constructor(public http: HttpClient, public dataservice: MoviedataService , public actrouter: ActivatedRoute ) { }
  title: any;
  favicon: string  = 'ios-star-outline';
  count: number = 0;
  //fav: Array<Moviedata>=[];


  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['title'];
      //console.log(this.title);
      
  });
  
  }
  FavChange() {
    this.count++;
    console.log(this.count);
    if (this.count % 2 !== 0) {
      this.dataservice.fav.push(this.title);
      console.log(this.dataservice.fav);
      return  this.favicon = 'ios-star';
     
    } else {
      let index: number;
      index = this.dataservice.fav.indexOf(this.title);
      if (index !== -1) {
        this.dataservice.fav.splice(index, 1);
        console.log(this.dataservice.fav);
    }
      return  this.favicon = 'ios-star-outline';
     


  }

}
}
