import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.getMenuByRestaurantId(this.route.parent.snapshot.params['id'])
      .subscribe(menuItems => this.menuItems = menuItems);
  }

  addMenuItem(item: MenuItem) {
    debugger
    console.log(item)
  }

}
