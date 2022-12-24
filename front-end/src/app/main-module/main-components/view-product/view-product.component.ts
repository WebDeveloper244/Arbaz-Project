import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BUTTONTEXT } from 'src/app/shared/enums/button-text';
import { ProductInterface } from 'src/app/shared/interface/product';
import { LocalStoragesmanagementServiceService } from 'src/app/shared/services/local-storagesmanagement-service.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {
  public url : string | any ='http://localhost:8686/';
public productObject:ProductInterface | any={}
// public productObject : ProductInterface | any = {};
  // public url : string | any = 'http://localhost:8888/';
  public selectedSizes:any = [];
  public selectedQuantity:Number | any = 0;
  public stockQuantity:any;
  public enumButtonText = BUTTONTEXT;
  public offCanvas = '';
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private LocalStoragesmanagementService:LocalStoragesmanagementServiceService,
    private toastrService:ToastrService
    
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
      this.stockQuantity = this.productObject.quantity;

    })
  }

  public getSizes(event:any) {
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);
    }
  }

  public decrementQuantity(){
    if(this.selectedQuantity > 0){
      let getDataFromLocalStorage = this.LocalStoragesmanagementService.getCartFromLocalStorage();
      if(getDataFromLocalStorage !== null){
        getDataFromLocalStorage.selectedQuantity--;
        this.LocalStoragesmanagementService.addToCart(getDataFromLocalStorage);
      }
      this.selectedQuantity --;
    }
  }

  public incrementQuantity(){
    if(this.selectedQuantity < this.stockQuantity){
      this.selectedQuantity ++;
    }
  }

  public addToCart(){
    if(this.selectedSizes.length<=0){
      this.toastrService.error('Please Select the Size before you proceeed to cart')
    }else{
      this.offCanvas='offcanvas';
      let { _id, category, color, companyName, description, price, productName, quantity} = this.productObject; 
      let processedCartObject = {
        productId:_id,
        imageUrl:this.productObject?.ProductImages[0]?.ProductImageUrl,
        selectedSizes:this.selectedSizes,
        selectedQuantity:this.selectedQuantity,
        category, color, companyName, description, price, productName, quantity
      }
      let processedCartArray = [];
      if(this.LocalStoragesmanagementService.getCartFromLocalStorage() !== null){
        let valueAlreadyExists = this.LocalStoragesmanagementService.getCartFromLocalStorage();
        valueAlreadyExists.forEach((element:any) => {
          processedCartArray.push(element);
        });
      }
      processedCartArray.push(processedCartObject);
      this.LocalStoragesmanagementService.addToCart(processedCartArray);
    }
  }

  public viewCart(){

  }

}
