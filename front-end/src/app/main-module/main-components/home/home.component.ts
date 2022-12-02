import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showAllProduct:any=[]
  AllCatgory:any=[]
  Url= 'http://localhost:8686/'
  show:boolean=true
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getAllProductData();
    
  
  }


  getAllProductData(){
    this.ProductService.GetAllProductData().subscribe((res:any)=>{
     res.Result.forEach((element:any)=>{
      if(element.softDelete!==1){
        this.showAllProduct.push(element
          )
      }
    })
      
    })
  }

  getLatestCategoryData(){
    this.ProductService.GetDataWhoseCategoryIsAll().subscribe((res:any)=>{
      res.Result.forEach((element:any)=>{
        if(element.softDelete!==1){
          this.AllCatgory.push(element)
          
        }
      })
     console.log( this.AllCatgory)
      this.show=false
    })
  }

  getAllData(){
    this.show=true
  }

  // searchAllProductData(id:any){
  //  this.ProductService.GetAllDataById(id).subscribe((res:any)=>{
  //   res.Result.forEach((element:any)=>{
  //     if(element.productName){
  //       this.searchProductData.push(element)
  //     }
  //   })
  //  })
  // }

}
