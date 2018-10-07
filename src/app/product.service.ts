import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://www.webapi.com/api/dal/';
  constructor(private http: HttpClient) { }
  
  getProductsByCategoryID(id: number): Observable<Product[]> {
    const productUrl = `${this.url}getproductsbycategoryid/${id}`;    
    return this.http.get<Product[]>(productUrl);    
  }

  getProductByProductID(id: number): Observable<Product> {
    const productUrl = `${this.url}getproductbyproductid/${id}`;
    return this.http.get<Product>(productUrl);
  }

}
