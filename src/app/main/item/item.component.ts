import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() onRemove = new EventEmitter<number>()
  @Input('Item') Item : Item

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(){
    this.onRemove.emit(this.Item.id)
  }
  
}
