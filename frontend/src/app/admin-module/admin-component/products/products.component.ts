

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray,  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/product-service/product.service';


@Component({                 // @ means Extra Info
  selector: 'app-products',
  templateUrl: './products.component.html',   // its a meta Data Information
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('files') files:ElementRef|any;

 color=["Red","Black","Blue"];
 categories=["Cap","Hoodies","Watch","Bags"];
 selectSize=["S","M","L","X-L","XX-L"];
 newSizeArray:any=[];
 imageArray:any=[];
 disableButtonTrue: boolean=false;

 myProductForm:FormGroup|any
  constructor(
    private formBuilder:FormBuilder,
    private toastr: ToastrService,
    private createProductService:ProductService
  ) { this.buildForm()}

  ngOnInit(): void {

  }

  buildForm(){
    this.myProductForm = this.formBuilder.group({
     productName: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      quantity: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl ('', Validators.required),
      color: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
      companyName: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
      category:new FormControl ('', Validators.required),
      size: new FormArray([]),
      // productMaterial:new FormControl('', Validators.required),
      // image: new FormArray([]) 1st step for single image
    })
  }

  getSize(event:any){
    if(event.target.checked){
     this.newSizeArray.push(event.target.value)


    }
    else{
     this.newSizeArray = this.newSizeArray.filter((value:any)=>value != event.target.value)
    }
  }

  getImages(event:any){
    console.log(event);
    console.log(this.files);
  if(event.target.files.length <= 5){

// 1st step  this.imageArray.push(event.target.files)

   [... event.target.files].forEach((file)=>{
    this.imageArray.push(file)
   })
   this.imageArray;
  }else{
    this.imageArray = [];
    this.files.nativeElement.value=null
    // this.disableButtonTrue = true
 this.toastr.warning ('You Cannot Select More Then 5 Images!');
  }
  }

 submitProductForm(){
  this.newSizeArray.forEach((elements:string)=>{
   let formControl = new FormControl(elements)
   this.myProductForm.get("size").push(formControl)
  })

  // this.imageArray.forEach((element:any) => {
  //  let formControl = new FormControl(element)                    1st step for single image
  //  this.myProductForm.get("image").push(formControl)
  // })

 let result= this.myProductForm.value;
  console.log(result);
  // ********************************** Toaster **********************//

  this.toastr.success ('Your Data is Submit 👍');

  // *********************Create Multi-Part-Data**********************\\

  let multiPartFormData = new FormData()
  multiPartFormData.append('productName',this.myProductForm.get('productName').value);  // getting value fom myProduct form through getter and setter function
  multiPartFormData.append('quantity',this.myProductForm.get('quantity').value);
  multiPartFormData.append('price',this.myProductForm.get('price').value);
  multiPartFormData.append('description',this.myProductForm.get('description').value);
  multiPartFormData.append('color',this.myProductForm.get('color').value);
  multiPartFormData.append('companyName',this.myProductForm.get('companyName').value);
  multiPartFormData.append('category',this.myProductForm.get('category').value);
  multiPartFormData.append('size',this.myProductForm.get('size').value);
  // multiPartFormData.append('productMaterial',this.myProductForm.get('productMaterial').value);


  // multiPartFormData.append('image',this.myProductForm.get('image').value);   1st step for single image now if u want to get more then one image then loop is used .......

  this.imageArray.forEach((imagesData:any)=>{
  multiPartFormData.append('images',imagesData)//Appending values to the getData varibale from FormGroup
  })

this.createProductService.createProductCart(multiPartFormData).subscribe((responseCommingFromBackend:any)=>{
console.log(responseCommingFromBackend);



})
  }



}
// console.log(this.ProductForm.get('companyName').setValue('Rameen is the new hacker of the class')); Gettter and Sstter (it get and set the value any Object(productForm))

