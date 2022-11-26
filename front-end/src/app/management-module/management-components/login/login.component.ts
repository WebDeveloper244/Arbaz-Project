import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//public Vs private by defualt every object is public public means  
//it is accesable in class and as well as in the component.html
//private only accessable in the class example 
 // public myName='khan'  
  // // accessable in template and as well as in the class
  // private myName2='khan'
  // // only accessable in class 

export class LoginComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

}
