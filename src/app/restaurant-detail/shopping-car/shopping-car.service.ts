import { Injectable } from "@angular/core";
import { CarItem } from "./car-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

@Injectable()
export class ShoppingCarService {

    carItems: CarItem[] = []

    clear() {
        this.carItems = []
    }

    addItem(menuItem: MenuItem) {
        let foundCarItem = this.carItems.find((carItem) => carItem.menunItem.id === menuItem.id)
        
        if (foundCarItem) {
            foundCarItem.quantity += 1
        } else {
            this.carItems.push(new CarItem(menuItem));
        }
    }

    removeItem(carItem: CarItem) {
        this.carItems.splice(this.carItems.indexOf(carItem), 1)
    }

    total(): number {
        return this.carItems
        .map(carItem => carItem.value())
        .reduce((prev, actual) => prev + actual, 0)
    }
}