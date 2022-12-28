import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  show:boolean=true;
  //pegination
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private ProductService:ProductService,private toastrService:ToastrService) { this.getLatestCategoryData()}

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
      
    })
  }

  getAllData(){
    this.show=true
  }
  getLatestData(){
    this.show=false;
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


  onTableDataChange(event: any) {
    this.page = event;
    // this.getAllProductData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.getAllProductData();
  }

}
