
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  clickMessage = '';

  bindingType : any = [
  ];

  selectedValue = null;

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }



  buttonOnClick(){
    this.clickMessage  = "No eye has seen , No ears have heard , what God has instore for those who love him";
  }


  constructor() { }

  ngOnInit() {


 this.bindingType = [
  {id: 1, name: "Two-way"},
  {id: 2, name: "Property"},
  {id: 3, name: "Event"},
];
  }
}
