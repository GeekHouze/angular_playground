import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

//This what makes a class a service
@Injectable({
  providedIn: 'root'
})

export class EmailService {

  obs : Subject<any> = new Subject();

  //get the service through dependecy injection
  constructor( private http : HttpClient){
  }

  ngOninit(){
    this.obs.next(1);
    this.obs.next(2);
    this.obs.next(3);
    this.obs.next(4);
  }
}
