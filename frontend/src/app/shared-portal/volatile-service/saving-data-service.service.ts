import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavingDataServiceService {

  constructor() { }
 saveDataToLocalStorage(ID:any){
  localStorage.setItem('Product-ID',JSON.stringify(ID))
 }
 getDataToLocalStorage(){
 return JSON.parse(localStorage.getItem('Product-ID') || '{}')
 }

 //=============>> ADD-Cart-Quantity <<=================

 addProductToLocalStorage(data:any){
  localStorage.setItem("User-Cart" , JSON.stringify(data));
}
getProductToLocalStorage(){
 return  JSON.parse(localStorage.getItem("User-Cart") || '{}');
}

}
