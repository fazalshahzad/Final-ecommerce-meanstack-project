import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProducts:any;
  
constructor(
 private jsonDataService:JsonDataService
  ) 
  { 
    this.productLength()
  }

  ngOnInit(): void {
  }
  productLength(){
this.totalProducts = this.jsonDataService.getjsonData()

  }

}
