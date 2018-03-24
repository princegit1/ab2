import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Data} from './data';
const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable()
export class DataService {
private _url:string = "/assets/json/live_match.json";
//private _url:string = "http://localhost:7070/Ast/rest/t/json";         

//private _url:string = "/assets/json/data.json";
  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]>{
    return this.http.get<Data[]>(this._url);
  }
}
