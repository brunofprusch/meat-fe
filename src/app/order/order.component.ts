import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from 'app/restaurant-detail/shopping-car/shopping-car.service';
import { CarItem } from 'app/restaurant-detail/shopping-car/car-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  items: CarItem[]

  constructor(private shoppingCarService: ShoppingCarService) { 
    this.items = shoppingCarService.carItems
  }

  ngOnInit() {
  }

  removeItem(item: CarItem) {
    this.shoppingCarService.removeItem(item)
  }

}
