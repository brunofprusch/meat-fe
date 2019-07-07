import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from './shopping-car.service';
import { CarItem } from './car-item.model';

@Component({
  selector: 'mt-shopping-car',
  templateUrl: './shopping-car.component.html'
})
export class ShoppingCarComponent implements OnInit {

  constructor(private shoppingCarService: ShoppingCarService) { }

  ngOnInit() {
  }

  items(): CarItem[] {
    return this.shoppingCarService.carItems
  }

  total(): number {
    return this.shoppingCarService.total()
  }

}
