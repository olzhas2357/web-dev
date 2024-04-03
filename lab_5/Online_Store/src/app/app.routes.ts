import { Routes } from '@angular/router';
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {BasketComponent} from "./components/basket/basket.component";

export const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch:'full'},
  {path:'catalog', component: ProductItemComponent, title: 'Каталог'},
  {path:'catalog/:catalogId', component: ProductListComponent, title: 'Продукты '},
  {path:'basket', component:BasketComponent, title:'Карзина' },
  {path: '**', component: NotFoundComponent, title: '404 not found'}
];
