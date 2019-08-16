import { Component, OnInit , Input  , Output , EventEmitter} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import { Iaccount } from '../account.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] ,
  providers: [MyserviceService]
})
export class NavbarComponent implements OnInit {
  title : String;
  serviceName : string;


  @Output() outputEvent = new EventEmitter();
  @Input()  accountDetails: Iaccount;

  constructor(private myserviceService : MyserviceService )  {
    this.title = "hello angular";

  }
  ngOnInit() {
    this.outputEvent.next(this.title);
  }

  buttonOnClick(){
      //alert("button on click");
      //this.outputEvent.next(this.title);
      //this.outputEvent.emit(this.title);
      this.title = "The world is yours";
  }
}
