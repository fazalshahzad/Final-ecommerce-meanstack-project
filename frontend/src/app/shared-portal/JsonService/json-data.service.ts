import { Injectable } from '@angular/core';
import Data from "../JsonFile/data.json"
@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor() { }
dataFromJson = Data;

getjsonData(){
  return this.dataFromJson;
}
}
