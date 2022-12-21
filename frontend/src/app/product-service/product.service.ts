import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { 
  }
  createProductCart(payLoad:any){
    return this.httpClient.post('http://localhost:5050/ProductManagement/ProductData',payLoad)
  }
  getProductData(){
    return this.httpClient.get('http://localhost:5050/ProductManagement/GetProductData');
  }
}
