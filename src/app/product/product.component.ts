import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.getProductByProductID() 
    });

  }

  getProductByProductID(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductByProductID(id)
    .subscribe(p=>this.product=p);

  }
}
