import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  nLesson = 3;
  arr = [11, 55, 77]
  myObj = {name: 'Телевизор' , params: {w: 300, h:450}}

  str = '!!!!!!'

  img1 = 'http://pngimg.com/uploads/smiley/smiley_PNG36233.png';

  flag1 = true

  constructor() { }

  ngOnInit(): void {
  }

  ClickBtn(){
    this.nLesson = 102;
    this.img1 = "http://vodavdome.com/wp-content/uploads/2016/07/smile-ok-3-300x287.png"
    this.flag1 = !this.flag1
  }
  onInput1(event :any){
    console.log(event)
    this.str = event.target.value
  }
  onInput2(s :string)
  {
    this.str = s
  }
  onBlur(s: string){
    this.str = s
  }

}
