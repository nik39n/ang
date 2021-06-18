import { Component,Input,EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductServiceservise } from 'src/app/services/ProductService.servise';
import { Itemes } from '../../model';



@Component({
  selector: 'app-ite',
  templateUrl: './ite.component.html',
  styleUrls: ['./ite.component.css'],
  template: `
    item: {{Itemes}}
  `
})
export  class IteComponent implements OnInit {

  @Input('item')
  Itemes!: Itemes

  Prod!: Itemes

  constructor(
    public route:ActivatedRoute,
    public productService:ProductServiceservise
  ) {
   }

  ngOnInit(): void {
    this.route.params.subscribe ((params:Params)=>{
      this.Prod = this.productService.getById(+params.id)
    }) 

  }

}
