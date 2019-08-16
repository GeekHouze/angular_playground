import { Component, OnInit, NgModule } from '@angular/core';
import { User } from '../user';

//FormControl class is the basic building block of reactive forms
//FormGroup class helps to group FormControls
//FormBuilder Service provides convenient methods for generating controls
import { FormBuilder , FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {

  user : User
  formSubmitted : boolean;


  //Declare a form group
  profileForm : FormGroup;
  emailPattern = "";


  constructor(private formbuilder : FormBuilder) { }
  ngOnInit() {

    this.profileForm = this.formbuilder.group({
      name: ['' , Validators.required],
      surname:['' , Validators.required],
      username: ['' , Validators.required],
      email :  ['' , [Validators.required , Validators.email]],
      phone :['' , Validators.required],
      password : ['' , Validators.required],
      address :['' , Validators.required],
    });

     this.user = new User();


       // email :  ['' , [Validators.required , Validators.pattern('/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/')]],

     /*this.profileForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),

      surname: new FormControl(this.user.surname, [
        Validators.required,
        Validators.minLength(4),
      ]),


      email :  new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(4),
      ]),

      phone : new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(4),
      ]),
      password : new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(4),
      ]),
      address : new FormControl(this.user.address, [
        Validators.required,
        Validators.minLength(4),
      ]),
      token : new FormControl(''),
    });*/

     this.user = new User();
  }


  submitRegister(){}



  newUser(user){
  }

  get email() {
    return this.profileForm.get('email');
  }

  /*processForm(){
    if(this.user.id == undefined){
          this._userService.createUser(this.user).subscribe((user)=>{
              console.log(User);
          })
    }
    else{
      this._userService.updateUser(this.user).subscribe((user)=>{
        console.log(User);
    })*/

  onSubmit(){
      this.formSubmitted = true;
    }
  }


 class class_name {

    //attributes definition
    //methods definition
 }


  class MyClass {
     name: String;
     id: number;

    constructor(name){
      this.name = name;
      this.id = 1;
    }

    getName(){
      return this.name;
    }

  }

  class ChildClass extends MyClass {

      display() : void {
        console.log("I am a child");
      }
  }
