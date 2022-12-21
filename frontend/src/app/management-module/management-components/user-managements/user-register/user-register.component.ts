import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 userRegisterForm:any|FormGroup
  constructor(private formBuilder:FormBuilder) { 
    this.Form()
  }

  ngOnInit(): void {
    
  }

  Form(){
    this.userRegisterForm = this.formBuilder.group({
      fName:['',[Validators.required,Validators.minLength(4),Validators.maxLength(35),Validators.pattern(/^[A-Za-z\s]*$/)]],
      lName:['',[Validators.required,Validators.minLength(4),Validators.maxLength(35),Validators.pattern(/^[A-Za-z\s]*$/)]],
      Email:['',[Validators.required,Validators.email]],
      Number:['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      Password:['',[Validators.required,]],
      CPassword:['',[Validators.required]]
    })
  }
  registerUserForm(){

  }

}
