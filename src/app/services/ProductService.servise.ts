import{Inject, Injectable} from '@angular/core';
import {Itemes} from '../model';
@Injectable({
    providedIn:'root'
})
export class ProductServiceservise
{
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
            
            
                }
      ]
      getById(id: number){
          return this.items.find(p=>p.id ===id)
      }
}