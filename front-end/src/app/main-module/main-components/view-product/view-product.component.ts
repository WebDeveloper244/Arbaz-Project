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
public selectedSizes:any=[];
public selectedQuantity : any =0;
public totalQuantity:any
public enumButtonText = BUTTONTEXT;

public offCanvas='';
// 
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
      this.totalQuantity=this.productObject.quantity;
     

    })
  }
  getSizes(event:any){
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);

    }
    console.log(this.selectedSizes)
  }
   public derease(){
  if(this.selectedQuantity>0){
    this.selectedQuantity--;
  }
  }
   public increase(){
  if(this.selectedQuantity < this.totalQuantity){
   this.selectedQuantity++;
  }
  }
  addToCart(){
    if(this.selectedSizes.length <= 0){
       this.toastrService.error("please select the sizes")
    }
    else{
      this.offCanvas='offcanvas'
    }
  }
}
