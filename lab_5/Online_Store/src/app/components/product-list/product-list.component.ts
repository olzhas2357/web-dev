import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {AppComponent} from "../../app.component";
import {Category} from "../../modelsCategory";
import {CategoryTech, ProductLap, ProductPhone, ProductTech, ProductTV} from "../../db";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Product} from "../../models";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{
  product!: Product[];
  category!: Category | undefined;

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        const catalogId = Number(params.get('catalogId'))
        switch (catalogId) {
          case 1:
            this.product = ProductPhone;
            break;
          case 2:
            this.product = ProductLap;
            break;
          case 3:
            this.product = ProductTV;
            break;
          case 4:
            this.product = ProductTech;
            break;
          default:
            break;
        }
      }
    )
  }
}
