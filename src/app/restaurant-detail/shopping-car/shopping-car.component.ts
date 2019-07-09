import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from './shopping-car.service';
import { CarItem } from './car-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-car',
  templateUrl: './shopping-car.component.html'
})
export class ShoppingCarComponent implements OnInit {

  constructor(private shoppingCarService: ShoppingCarService) { }

  ngOnInit() {}

  items(): CarItem[] {
    return this.shoppingCarService.carItems
  }

  clear(): void {
    this.shoppingCarService.clear()
  }

  removeItem(carItem: CarItem): void {
    this.shoppingCarService.removeItem(carItem)
  }

  addItem(menuItem: MenuItem): void {
    this.shoppingCarService.addItem(menuItem)
  }

  total(): number {
    return this.shoppingCarService.total()
  }

}
