import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPComponent } from '../main/mainp.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup
  title ="t";
  item:MainPComponent
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      description:new FormControl(''),
      year:new FormControl(''),
      img:new FormControl(''),
      id:new FormControl(''),


    })
  }
  submit(){
    let formData = {...this.form.value}

    console.log(formData)
  }
}

