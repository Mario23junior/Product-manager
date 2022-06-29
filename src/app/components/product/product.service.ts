import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private snackBar: MatSnackBar
  private http: HttpClient
  private baseUrl = 'http://localhost:3001/produto'

  constructor(snackBar: MatSnackBar, http: HttpClient) {
    this.snackBar = snackBar
    this.http = http
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['green-snackbar']
    })
  }

  createProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, Product)
  }


  readProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
      return this.http.put<Product>(url,product)
  }
}
