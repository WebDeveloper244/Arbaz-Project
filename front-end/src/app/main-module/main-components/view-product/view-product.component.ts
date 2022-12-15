import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/shared/interface/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
public productObject:ProductInterface | any={}
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService
    
    ) { 
    this.getValueFromParms()
  }

  ngOnInit(): void {
  }

  getValueFromParms(){
    const parmsId=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(parmsId)
    this.productService.GetAllDataById(parmsId).subscribe((res:any)=>{
      this.productObject=res.Result;
    })
  }

}
