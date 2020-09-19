import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from '../product/product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_BASE = "http://localhost:3001/products";

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
    ) { }

  showMessage(msg: string = "default"): void {
    this.snackBar.open(msg, "[close]", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.URL_BASE, product);   
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_BASE);
  }

}
