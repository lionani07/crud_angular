import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from '../product/product.model'
import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_BASE = "http://localhost:3001/products";

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
    ) { }

  showMessage(msg: string, isError = false): void {
    this.snackBar.open(msg, "[close]", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    })
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.URL_BASE, product).pipe(
      map(obj => obj),
      catchError(e=> this.handlerError(e))
    );   
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_BASE).pipe(
      map(obj=> obj),
      catchError(e => this.handlerError(e))
    );
  }

  findById(id: number): Observable<Product> {    
    return this.httpClient.get<Product>(this.createUrlBy(id));
  }

  update(product: Product): Observable<Product> {   
    return this.httpClient.put<Product>(this.createUrlBy(product.id), product);
  }

  delete(id: number): Observable<Product> {    
    return this.httpClient.delete<Product>(this.createUrlBy(id));
  }

  createUrlBy(id: number): string {
    return `${this.URL_BASE}/${id}`;
  }

  handlerError(e: any): Observable<any> {
    this.showMessage(e.message, true);
    return EMPTY;
  }

}
