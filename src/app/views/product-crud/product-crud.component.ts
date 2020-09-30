import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from '../../components/template/header/header.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  private _headerData: HeaderData = {
    title: "List of products",
    icon: "shopping_cart",
    linkUrl: "/products"
  }

  constructor(
    private router: Router,
    private headerService: HeaderService) {
      this.headerService.headerData = this._headerData;
     }

  ngOnInit(): void {
  }

  navigateToCreateProduct(): void {
    this.router.navigate(["/products/create"]);
  }



}
