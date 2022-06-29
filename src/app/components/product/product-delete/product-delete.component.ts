import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  private productService: ProductService
  private router: Router
  private routerActive: ActivatedRoute

  product: Product = {
    id: 0,
    name: '',
    price: 0.0
  }
 
  constructor(productService: ProductService, router: Router,
    routerActive: ActivatedRoute) {
    this.router = router
    this.routerActive = routerActive
    this.productService = productService
   }

  ngOnInit(): void {

    const id: any = this.routerActive.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  delete():void{
    const id: any = this.routerActive.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(product => {
      this.router.navigate(['/products'])
      this.productService.showMessage(`O produto ${this.product.name}foi excluido com sucesso`)
      this.product = product
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}