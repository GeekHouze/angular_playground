import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Player } from '../player';
import { FormControl, FormBuilder , FormGroup, FormsModule , Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  heroForm : FormGroup;
  formbuilder : FormBuilder;

  constructor() { }

  ngOnInit() {

    this.heroForm  = this.formbuilder.group({
      name: '',
      job_role: '',
    });

  }

  logForm(value: any) {

    alert(value.firstname+" "+value.lastname+" "+
    value.city+" "+value.street+" "+value.zip);

  }

}


