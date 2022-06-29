import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product = {
    name: '',
    price: 0.0
  }

  private router: Router
  private productService: ProductService

  constructor(productService: ProductService, router: Router) {
    this.productService = productService
    this.router = router
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  canc(): void {
    this.router.navigate(['/products'])
  }

}
