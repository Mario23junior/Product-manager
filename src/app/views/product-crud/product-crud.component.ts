import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  private router:Router

  constructor(router: Router) {
    this.router = router
  }

  ngOnInit(): void {
  }

  navbateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
