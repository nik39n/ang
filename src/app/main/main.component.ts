import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  first;
  second;
  znak:string;
  res;
  
  constructor() { }

  ngOnInit(): void {

  }
  onInput1(event :any){
    this.first = event.target.value;

  }
  onInput2(event :any){
    this.second = event.target.value;
    
  }

  ClickBtn(){
    switch (this.znak) {
      case '*':
          this.res = this.first*this.second;
          break
      case '+':
        this.res = Number(this.first)+Number(this.second);
          break

      case '-':
        this.res = Number(this.first)-Number(this.second);
          break
      
      case '/':
          if ((Number(this.first==0) ||Number(this.second==0))){
            this.res =  "На 0 делить нельзя";
          } else{
            this.res = Number(this.first)/Number(this.second);
          }

          break
      
      case '%':
          if (this.first==0 ||this.second==0){
            this.res =  "На 0 делить нельзя";
              } else{
                this.res = Number(this.first)%Number(this.second);
              }
          break
      
    }
  }

  
}
