import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    providers: [DataService]
})
export class HomeComponent implements OnInit {
  dd = true;
  public d1:any;
  public d2:any;
constructor(private _dataService: DataService){  }

ngOnInit() {
this._dataService.getData().subscribe(data =>   { 
     this.d1 = data;
     this.d1 = Array.of(this.d1); 
  
     console.log( this.d1);
  });


}




}
