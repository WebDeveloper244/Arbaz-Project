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
}

