import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService } from 'src/app/product-service/product.service';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';
import { MessangerService } from 'src/app/shared-portal/rxjs-messanger/messanger.service';
import { SavingDataServiceService } from 'src/app/shared-portal/volatile-service/saving-data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  DataComeFromJson :any=[];
  backEndProductData:any=[];

  constructor(
    
    private JsonService:JsonDataService,
    private Router : Router,
    private messanger : MessangerService,
    private volatileService :SavingDataServiceService,
    private getProductDataFromBackend:ProductService,   // 1st step import
  ) { 
    
  this.getDataFromservice();

  }
 
  ngOnInit(
    
  ): void {
    this.getProductDataFromBackend.getProductData().subscribe((resultFromBackend:any)=>{
      this.backEndProductData = resultFromBackend.Result;
    })
  }


  getDataFromservice(){
    this.DataComeFromJson = this.JsonService.getjsonData();
  }

  goToCartPage(Id:any){
   
 
    this.volatileService.saveDataToLocalStorage(Id)
    this.messanger.sendMessageFromMyData(Id)
    this.Router.navigate(['view-product']);
 
  }

}
