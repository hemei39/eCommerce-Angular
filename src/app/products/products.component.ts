import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  itemCount: number;

  constructor(private productService: ProductService, 
    private cartService: CartService,
    private route: ActivatedRoute) { }

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

  addToCart(productID: number, unitPrice: number): void {
    let tmpusr = localStorage.getItem('tmpusr');
    if (!tmpusr || tmpusr.indexOf('tmpusr') < 0)
    {
      tmpusr = 'tmpusr' + uuid();
      localStorage.setItem('tmpusr', tmpusr);
    }

    let cart: Cart = {
      Username: tmpusr,
      ProductID: productID,
      UnitPrice: unitPrice,
      Quantity: 1,
      Discount: 0
    }
    
    this.cartService.addToCart(cart)
    .subscribe(c=>this.itemCount=c);

    
  }
}
