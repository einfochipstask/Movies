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
   id: any;
   common: any ;
   years: number;
   rating: any;
   category: any;
   title: any;

 public data = [];
  
    ChangeId(opId: any) {
      this.id = opId;
      console.log(this.id);
    }


  ngOnInit() {
   this.dataservice.getData().subscribe(result => this.data = result);
   this.actrouter.params.subscribe(params => {
     // tslint:disable-next-line: no-string-literal
     this.id = params['id'];
     // tslint:disable-next-line: no-string-literal
     this.common = params['name'];
     console.log(this.id);
   }


  );
      switch (this.id) { 
    
        case "1": { 
        this.years = 2019;
        this.common='New Release';
      
           break; 
         
        } 
        case "2": { 
           this.rating = 4;
           this.common='Most Populer';
           break; 
        } 
        case "3": {
       
           this.category='action';
         
           break;    
        } 
        case "4": { 
         
           this.category='comedy';
           break; 
        }  
        case "5": { 
         
           this.category='horror';
           break; 
        } 
        case "6": { 
          
           this.category='animation';
           break; 
        } 
        case "7": { 
          
           this.category='science fiction';
           break; 
        } 
        default: { 
           console.log('Invalid choice'); 
           break;              
        } 
     }


  }




}
