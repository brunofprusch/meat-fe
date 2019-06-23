import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    getAllRestaurants() : Observable<Restaurant[]> {
      return this.http.get(`${environment.api.meat}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}