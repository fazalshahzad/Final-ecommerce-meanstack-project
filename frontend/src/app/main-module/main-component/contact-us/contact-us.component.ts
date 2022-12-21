import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
// *********
  myContactForm:any|FormGroup
pristine: any;
// *********


  constructor(
    private formBuilder:FormBuilder 
  ) { 
    this.buildContactForm() 
  }

  ngOnInit(): void {
  }

  buildContactForm(){
    this.myContactForm=this.formBuilder.group({
     Name: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(100),Validators.pattern(/^[A-Za-z]+$/)]),
     Email: new FormControl ('', [Validators.required,Validators.email]),
     Address: new FormControl ('', [Validators.required,]),
     PhoneNo: new FormControl ('', [Validators.required,Validators.pattern(/^[0-9]*$/)]),
     Textarea: new FormControl ('', [Validators.required,]),
    })
  }
  submitMyContactForm(){
   let result = this.myContactForm.value 
   console.log(result);
   
  }


}
