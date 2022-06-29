import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  private productService: ProductService
  private router: Router

  product: Product = {
    id:0,
    name: '',
    price: 0.0
  }

  constructor(productService: ProductService, router: Router) {
    this.productService = productService
    this.router = router
  }

  ngOnInit(): void {

  }

  updateProduct(): void {
   }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
