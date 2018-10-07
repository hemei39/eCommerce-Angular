import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute) {
      }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.getProductsbyCategoryID() 
    });

  }

  getProductsbyCategoryID(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryID(id)
    .subscribe(p=>this.products=p);
  }

  addToCart(): void {
    let tempId = localStorage.getItem('tempId');
    if (tempId && tempId.indexOf('temp') == 0)
    {
      console.log('get uid: ', tempId);
    }
    else
    {
      localStorage.setItem('tempId','temp'+ uuid());
    }
  }
}
