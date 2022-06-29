import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
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
  private routerActive: ActivatedRoute

  product: Product = {
    id:0,
    name: '',
    price: 0.0
  }

  constructor(productService: ProductService, router: Router, routerActive:ActivatedRoute) {
    this.productService = productService
    this.router = router
    this.routerActive = routerActive
  }

  ngOnInit(): void {
      const id:any = this.routerActive.snapshot.paramMap.get('id')
      this.productService.readById(id).subscribe(product => {
        this.product = product
      })
  }

  updateProduct(): void {
      
   }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
