import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  private router: Router
  private productService: ProductService

  constructor(productService: ProductService,router: Router) {
    this.productService = productService
    this.router = router
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMessage('Operação realizada com sucesso')
  }

  canc(): void {
     this.router.navigate(['/products'])
  }

}
