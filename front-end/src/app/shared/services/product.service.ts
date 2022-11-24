import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  CreateProductCard(Payload:any){
    return this.http.post('http://localhost:8686/ProductMangementRouter/ProductData',Payload);
  }
  GetAllProductData(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/GetProductData')
  }
  GetAllDataById(id:any){
  return this.http.get(`http://localhost:8686/ProductMangementRouter/getDocumentById/${id}`)
  }

  DeleteDataById(id:any){
    return this.http.delete(`http://localhost:8686/ProductMangementRouter/DeleteProductById/${id}`)
  }
}

