import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedataService } from '../moviedata.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// tslint:disable-next-line: label-position


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
 
  constructor(public http: HttpClient, public dataservice: MoviedataService, public actrouter: ActivatedRoute) {
    // tslint:disable-next-line: no-unused-expression

   }
   id: number;
   common: any;
   years: any;
   rating: any;
   category: any;

 public data = [];



  ngOnInit() {
   this.dataservice.getData().subscribe(result => this.data = result);
   this.actrouter.params.subscribe(params => {
     // tslint:disable-next-line: no-string-literal
     this.id = params['id'];
     console.log(this.id);
   }


  );
  switch (this.id) { 

    case 1: { 
    this.common= 'year';
    this.years='2019'
       break; 
    } 
    case 2: { 
       this.common='rating'; 
       this.rating='4';
       break; 
    } 
    case 3: {
       this.common='category';
       this.category='action';

       break;    
    } 
    case 4: { 
      this.common='category';
       this.category='comedy';
       break; 
    }  
    case 5: { 
      this.common='category';
       this.category='horror';
       break; 
    } 
    case 6: { 
      this.common='category';
       this.category='animation';
       break; 
    } 
    case 7: { 
      this.common='category';
       this.category='horrorscience fiction';
       break; 
    } 
    default: { 
       console.log('Invalid choice'); 
       break;              
    } 
 }


  }


}
