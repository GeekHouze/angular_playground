import { Component, OnInit , Input  , Output , EventEmitter} from '@angular/core';

import { Iaccount } from '../account.model';



@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  output : any = [
  ];

  //an Interface that we transfer through event emitters
  account : Iaccount;
  title = 'appt';
  selectedValue = null;

  constructor() {
    this.account = {
      acc_no : "1234" ,
      name : "Paseka" ,
      type : "savings"
    }

    this.output= [
      {id: 0, name: "Child-to-Parent"},
      {id: 1, name: "Parent-to-Child"}
    ];


    this.selectedValue = this.output[0];
  }

  ngOnInit() {

  }

  recieve(event){
    this.title = event;
  }

}
