import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";
import { Review } from "app/restaurant-detail/reviews/review.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    getAllRestaurants() : Observable<Restaurant[]> {
      return this.http.get(`${environment.api.meat}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    getRestaurantById(restaurantId: string): Observable<Restaurant> {
      return this.http.get(`${environment.api.meat}/restaurants/${restaurantId}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    getReviewsByRestaurantId(restaurantId: string): Observable<Review[]> {
      return this.http.get(`${environment.api.meat}/restaurants/${restaurantId}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    getMenuByRestaurantId(restaurantId: string): Observable<MenuItem[]> {
      return this.http.get(`${environment.api.meat}/restaurants/${restaurantId}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}