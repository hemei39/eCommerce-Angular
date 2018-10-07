import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

const routes: Routes =[
  { path: 'category/:id', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
