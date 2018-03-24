import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
//public _active:any="";  
 //public _active_nav1:boolean=false;
 
  constructor() { }

  ngOnInit() {
var l = window.location.href;
var s = l.split("/")[3];
var _nv = document.getElementsByClassName('navbar-nav')[0].children;
[].slice.call(_nv).forEach(function(v,i){
if(s===v.children[0].innerHTML){
v.classList.add('active');
}  
else{   
v.classList.remove('active');
}
})



  }


  sml(t){
    console.log(t);

  }


}
