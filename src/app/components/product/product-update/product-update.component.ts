import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id  = this.route.snapshot.paramMap.get("id");
    this.productService.findById(id).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage("Producto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
