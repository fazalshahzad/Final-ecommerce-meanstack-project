import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm:any|FormGroup
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.userLoginFormModel();
  }

  ngOnInit(): void {
  }
userLoginFormModel(){
  this.userLoginForm = this.formBuilder.group({
   userName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern(/^[A-Za-z\s]*$/)]),
   userPassword: new FormControl('',[Validators.required])
  })
}

  submitUserLoginForm(){
    // this.userLoginForm.value
    // console.log(this.userLoginForm.value);
    
  }
}(/^[a-zA-Z\s]*$/g)
