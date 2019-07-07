import { MenuItem } from "../menu-item/menu-item.model";

export class CarItem {
    constructor(public menunItem: MenuItem, public quantity: number = 1) {}

    value() {
        return this.menunItem.price * this.quantity;
    }
}