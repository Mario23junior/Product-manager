import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  proLegal = "Qualquer de exemplo central"

  constructor() { }

  ngOnInit(): void {
  }

}
