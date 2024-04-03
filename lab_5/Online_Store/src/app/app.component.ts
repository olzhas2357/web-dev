import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {Product} from "./models";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductItemComponent, ProductListComponent,  RouterLink, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor() {
  }

  ngOnInit() {
  }

}
