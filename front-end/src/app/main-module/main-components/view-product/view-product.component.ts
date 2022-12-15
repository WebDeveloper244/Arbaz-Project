import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.getValueFromParms()
  }

  ngOnInit(): void {
  }

  getValueFromParms(){
    const parmsId=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(parmsId)
  }

}
