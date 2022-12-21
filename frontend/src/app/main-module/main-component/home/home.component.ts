import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';
import { MessangerService } from 'src/app/shared-portal/rxjs-messanger/messanger.service';
import { SavingDataServiceService } from 'src/app/shared-portal/volatile-service/saving-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private JsonService:JsonDataService,
    private Router : Router,
    private messanger : MessangerService,
    private volatileService :SavingDataServiceService
  ) { 
  this.getDataFromservice();
  }

  DataComeFromJson :any=[];


  ngOnInit(): void {
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
