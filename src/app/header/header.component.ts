import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private linkRouter:Router) { }

  ngOnInit() {
  }

  eventEmitters(){
    this.linkRouter.navigate(['eventEmitters']);
  }

  services(){
    this.linkRouter.navigate(['services']);
  }

  observables(){
    this.linkRouter.navigate(['observables']);
  }

  databinding(){
    this.linkRouter.navigate(['data-binding']);
  }

  httpRequests(){
    this.linkRouter.navigate(['httpRequests']);
  }

  validation(){
    this.linkRouter.navigate(['validation']);
  }

  forms(){
    this.linkRouter.navigate(['forms']);
  }

  modules(){
    this.linkRouter.navigate(['modules']);
  }

}
