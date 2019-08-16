import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  users : any;
  dataExists : boolean;

  constructor(private emailService : EmailService) {

  }

  ngOnInit() {}

}
   /*this.emailService.getFromServer("https://reqres.in/api/users/").subscribe(res=>{
     console.log(res)
     this.users = res;
     this.dataExists = true;
     console.log(this.users.data);
   },err=>{
     console.log(err)
   })
  //  this.emailService.getFromServer("https://reqres.in/api/users/").subscribe((a)=>{
  //      alert('fg')
  //       this.users = a;
  //       this.dataExists = true;
  //       console.log(this.users.data,a);
  // },
  // ()=>{

  // } ,
  // ()=>{});
}


getRequest(){
  //return this.emailService.getFromServer("https://reqres.in/api/users")
}
}
*/
