import { Component , Directive, Renderer2, ElementRef, ViewChild ,  OnInit  } from '@angular/core';
import { Iaccount } from './account.model';
import { Subscription } from 'rxjs';
import {MyserviceService } from './myservice.service';
import {MessageService} from './message.service';
import {EmailService} from './email.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appt';
  users : any;

  account : Iaccount;
  agreed = 0;
  serviceName : string;
  message : any;
  subscription : Subscription;
  dataExists : boolean;
  mynullvalue : null;
  numericValue : undefined;
  dynamicVAlue : any = "Paseka Moyenki";
  @ViewChild('myDiv') myDiv: ElementRef;

  constructor(private myserviceService : MyserviceService ,
     private emailService : EmailService ,
       private renderer: Renderer2){
    this.account = {
      acc_no : "1234" ,
      name : "Paseka" ,
      type : "savings"
    }


    console.log(this.message);
    this.serviceName = myserviceService.serviceName;
  }


  recieve(event){
      this.title = event;
  }

  ngOnInit() {
   /* this.emailService.getFromServer("https://reqres.in/api/users/4").subscribe((a)=>{
        this.users = a;
        this.dataExists = true;
    },
    ()=>{

    } ,
    ()=>{});*/

    this.emailService.sendToServer("https://reqres.in/api/users");
    this.getNull();

    console.log("on init");
    this.renderer.setStyle(this.myDiv.nativeElement, 'color', 'blue');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

ngAfterViewInit(): void {
  console.log("afterview init");
  this.renderer.setStyle(this.myDiv.nativeElement, 'color', 'blue');
}


sendchild(){
  this.emailService.obs.next("Hello , this is a message 1");
  this.emailService.obs.next("Hello , this is a message 2");
  this.emailService.obs.next("Hello , this is a message 3");
  this.emailService.obs.next("Hello , this is a message 4");
}
completechild(){
  this.emailService.obs.complete();
}



getNull() : null{
    return this.mynullvalue;
}

getUndefined() : undefined{
  return this.numericValue;
}

getValue() : any{
  return this.dynamicVAlue;
}
}
