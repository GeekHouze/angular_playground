import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {EmailService} from '../email.service';
import { Subject } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private emailService : EmailService) {
   }



  ngOnInit() {
   // this.firstClick();
  }


  //method for observing the emailService as a subject
  observe(){
    this.emailService.obs.subscribe((a) => {

      alert(a);
      console.log(a);
    } ,

    (err) =>{
          alert("error"+err);
    }
    ,

    () => {
        alert("Completed");
    }
    );
  }

  completesubscription(){
    this.emailService.obs.unsubscribe();
    console.log("unsubscribed");
  }


  subjects(){

          const mySubject =  new Subject<number>();

          mySubject.next(1);

          const subscription1 = mySubject.subscribe(x => {
            console.log('From subscription 1:', x);
          });

          mySubject.next(2);

          const subscription2 = mySubject.subscribe(x => {
            console.log('From subscription 2:', x);
          });

          mySubject.next(3);

          subscription1.unsubscribe();

          mySubject.next(4);
  }

  /*behaviorSubject(){
    const mySubject = new Rx.BehaviorSubject('Hey now!');

    mySubject.subscribe(x => {
        console.log('From 1st sub:', x);
    });

    mySubject.next(5);

    mySubject.subscribe(x => {
      console.log('From 2nd sub:', x);
    });
  }*/

  /*replaySubjects(){

    const mySubject = new Rx.ReplaySubject(2);

    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);
    mySubject.next(4);

    mySubject.subscribe(x => {
      console.log('From 1st sub:', x);
    });

    mySubject.next(5);

    mySubject.subscribe(x => {
      console.log('From 2nd sub:', x);
    });

  }*/

  /*firstClick() {
    //this.emailService.firstClick();
}*/


}
