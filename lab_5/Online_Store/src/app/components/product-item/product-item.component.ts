import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Category} from "../../modelsCategory";
import {CategoryTech} from "../../db";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  category!: Category[];
  constructor() {
  }
  ngOnInit() {
    this.category = CategoryTech
  }
}
