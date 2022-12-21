import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  subject = new ReplaySubject(1)

  constructor() { }
  sendMessageFromMyData(cart:boolean){
    this.subject.next(cart);
  }
 
  getMessageFromMyData(){
    return this.subject.asObservable()
  }
}
