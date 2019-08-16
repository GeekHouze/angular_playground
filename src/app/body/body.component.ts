import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'] ,
  providers: []

})
export class BodyComponent implements OnInit {

  serviceName : string;

  constructor(private myserviceService : MyserviceService , private messageService : MessageService){
      this.serviceName = myserviceService.serviceName;
      this.sendMessage();
      this.clearMessage();
  }

  ngOnInit() {

  }

  sendMessage(){
    this.messageService.sendMessage("This is a Message from body component");
  }

  clearMessage(){
    this.messageService.clearMessage();
  }

}
