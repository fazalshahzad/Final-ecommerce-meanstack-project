import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';
import { MessangerService } from 'src/app/shared-portal/rxjs-messanger/messanger.service';
import { SavingDataServiceService } from 'src/app/shared-portal/volatile-service/saving-data-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  jsonData:any=[]
  clickCardObject:any;
  FilteredObject:any=[]
  quantity:any=0;
  //totalQuantity:any=0;
  productQuantity:any;
  showBox: boolean = false;
  CartArray:any=[];  //save Data
  GetSaveDataFromLocalStorage:any=[]  //Get Save Data
  NewCartArray: any=[];
  selectedQuantity=0;


  constructor(
    private JsonService:JsonDataService,
    private messanger : MessangerService,
    private volatileService :SavingDataServiceService
  ) 

  { 
    this.messanger.getMessageFromMyData().subscribe((rxjsData:any)=>{
    this.clickCardObject = rxjsData
    })
    this.getdatafromservice11()
  }

  ngOnInit(): void {
  }
  getdatafromservice11(){
   this.jsonData = this.JsonService.getjsonData()

  // ===================================================================>>
  //  this.FilteredObject = this.jsonData.filter((Result:any)=>{
  //   return (Result.id === this.clickCardObject)                            //1st step With-out (Presistance/save)
  // })
  // console.log(this.FilteredObject);
  // ====================================================================>>

    if(this.clickCardObject === undefined){
     const saveDataOfLocalStorage = this.volatileService.getDataToLocalStorage()
     this.FilteredObject = this.jsonData.filter((Result:any)=>{
        return (Result.id === saveDataOfLocalStorage)                            //2nd step With (Presistance/save)
       })
       this.productQuantity = this.FilteredObject[0].qty
       console.log(this.FilteredObject);
       return
       
    }
   
    this.FilteredObject = this.jsonData.filter((Result:any)=>{
      return (Result.id === this.clickCardObject)                            
     })
     console.log(this.FilteredObject);
     this.productQuantity = this.FilteredObject[0].qty
  }


// ===================>> Quantity-Section <<=================== //

addQuantity(){
  this.showBox=true
  const CartObjectPlus=this.volatileService.getProductToLocalStorage()
  if(this.selectedQuantity >= this.productQuantity){
return
  }

  if(Object.entries(CartObjectPlus).length === 0){
   this.CartArray.push(this.FilteredObject[0]);
   this.volatileService.addProductToLocalStorage(this.CartArray);
   this.clickCardObject = undefined;
   this.GetSaveDataFromLocalStorage = this.volatileService.getProductToLocalStorage();
   return
  }
  
  if(Object.entries(CartObjectPlus).length !==0 && this.clickCardObject !== undefined){
    this.NewCartArray.push(this.FilteredObject[0])
    CartObjectPlus.forEach((element:any)=>{
      this.NewCartArray.push(element)
    });
    this.volatileService.addProductToLocalStorage(this.NewCartArray);
    this.clickCardObject = undefined;
    this.GetSaveDataFromLocalStorage = this.volatileService.getProductToLocalStorage();
    return
  }
  CartObjectPlus.map((element:any) => {
    if(this.FilteredObject[0].id === element.id){
      element.newQuantity++;
      this.selectedQuantity++;
}

})

this.volatileService.addProductToLocalStorage(CartObjectPlus);
this.GetSaveDataFromLocalStorage = this.volatileService.getProductToLocalStorage();
}

SubtractQuantity(){
  const CartObjectPlus=this.volatileService.getProductToLocalStorage()

  if(this.selectedQuantity <= 0){
    return
      }

  CartObjectPlus.map((element:any) => {
    if(this.FilteredObject[0].id === element.id){
      element.newQuantity--;
      this.selectedQuantity--;
}

})
this.volatileService.addProductToLocalStorage(CartObjectPlus);
}

}
