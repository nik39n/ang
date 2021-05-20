import { Component, OnInit } from '@angular/core';
import { Item } from '../model';
import {AddComponent} from  "../add/add.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainPComponent implements OnInit {
  item: Item[] =  [
    {
      title: "Суши",
      description: "Лосось",
      year: 2000,
      img:"https://whiteroll.com.ua/wp-content/uploads/2019/12/kaliforniya-s-lososem-harkov-kaliforniya-s-lososem-sushi-kaliforniya-s-lososem-zakazat-zakazat-sushi-dostavka-sushi-harkov-losos-ikr1-scaled.jpg",
      id: 1
    },
    {
      title: "РОли",
      description: "Морковь",
      year: 2002,
      img:"https://whiteroll.com.ua/wp-content/uploads/2019/12/kaliforniya-s-lososem-harkov-kaliforniya-s-lososem-sushi-kaliforniya-s-lososem-zakazat-zakazat-sushi-dostavka-sushi-harkov-losos-ikr1-scaled.jpg",
      id: 2
    },
    {
      title: "Вок",
      description: "Мука",
      year: 2005,
      img:"https://whiteroll.com.ua/wp-content/uploads/2019/12/kaliforniya-s-lososem-harkov-kaliforniya-s-lososem-sushi-kaliforniya-s-lososem-zakazat-zakazat-sushi-dostavka-sushi-harkov-losos-ikr1-scaled.jpg",
      id: 3
    },
    {
      title: "Суши",
      description: "Лосось",
      year: 2000,
      img:"https://whiteroll.com.ua/wp-content/uploads/2019/12/kaliforniya-s-lososem-harkov-kaliforniya-s-lososem-sushi-kaliforniya-s-lososem-zakazat-zakazat-sushi-dostavka-sushi-harkov-losos-ikr1-scaled.jpg",
      id: 4
    },
    {
      title: "Суши",
      description: "Лосось",
      year: 2000,
      img:"https://whiteroll.com.ua/wp-content/uploads/2019/12/kaliforniya-s-lososem-harkov-kaliforniya-s-lososem-sushi-kaliforniya-s-lososem-zakazat-zakazat-sushi-dostavka-sushi-harkov-losos-ikr1-scaled.jpg",
      id: 5
    },
    {
      title: "Суши",
      description: "Лосось",
      year: 2000,
      img:"https://whiteroll.com.ua/wp-content/uploads/2019/12/kaliforniya-s-lososem-harkov-kaliforniya-s-lososem-sushi-kaliforniya-s-lososem-zakazat-zakazat-sushi-dostavka-sushi-harkov-losos-ikr1-scaled.jpg",
      id: 6
    }
  ]
  title:string=null
  description:string=null
  year:number=null
  img:string=null
  id:number=null




  constructor() { }

  ngOnInit(): void {

  }
  onInput2(title:any){
    this.title=title.target.value;
  
  }
  onInput3(description:any){
    this.description=description.target.value;
  
  }
  onInput4(year:any){
    this.year=year.target.value;
  
  }
  onInput5(img:any){
    this.img=img.target.value;
  
  }
  onInput6(id:any){
    this.id=id.target.value;
  
  }
  ClickBtn(){
      this.item.push({
      title: this.title,
      description: this.description,
      year: this.year,
      img:this.img,
      id: this.id
    })
  }
  

  
}
