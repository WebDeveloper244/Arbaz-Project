import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-analystic',
  templateUrl: './product-analystic.component.html',
  styleUrls: ['./product-analystic.component.css']
})
export class ProductAnalysticComponent implements OnInit {
  myArray:any=[];
  getParticularData:any={}
  url='http://localhost:8686/'
  constructor(private productService:ProductService) { }
 
  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.productService.GetAllProductData().subscribe((res:any)=>{
      res.Result.forEach((element:any) => {
        if(element.softDelete!==1){
          this.myArray.push(element)
        }
      });
     })
  }
  getParticularDataById(id:any){
    this.productService.GetAllDataById(id).subscribe((res:any)=>{
      this.getParticularData=res.Result
    })
  }

  deleteById(id:any){
    this.productService.DeleteDataById(id).subscribe((res:any)=>{
      res.Result
      // this.getParticularData=res.Result
  })

}
}
