import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showAllProduct:any=[]
  Url= 'http://localhost:8686/'
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getAllProductData()
  }


  getAllProductData(){
    this.ProductService.GetAllProductData().subscribe((res:any)=>{
    this.showAllProduct = res.Result
      
    })

    
  }

}
