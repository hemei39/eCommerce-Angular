import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  //headers: new HttpHeaders({'Content-Type': 'application/JSON'})
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = "http://www.webapi.com/api/dal/addtocart"
  constructor(private http: HttpClient) { }

  addToCart(cart: Cart): Observable<any> {
    return this.http.post<any>(this.url, cart, httpOptions);
  }
  // addToCart(username: string): Observable<any> {
  //   return this.http.post<any>(this.url, {username: username}, httpOptions);
  // }
}
