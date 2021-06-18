import { Component, OnInit } from '@angular/core';
import { Itemes } from '../model';
import { ProductServiceservise } from '../services/ProductService.servise';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items:Itemes[]=[
    {
    id: 1,
    typeproduct: "toy",
    vendor: "moy",
    model: "last",
    price: 200,
    description:"The best toy",
    params:"small"


    },
    {
        id: 1,
        typeproduct: "toy",
        vendor: "moy",
        model: "last",
        price: 200,
        description:"The best toy",
        params:"small"
    
    
        },
        {
        id: 1,
        typeproduct: "toy",
        vendor: "moy",
        model: "last",
        price: 200,
        description:"The best toy",
        params:"small"
    
    
        }]
  constructor(public product:ProductServiceservise ) { }

  ngOnInit(): void {
  }

}
