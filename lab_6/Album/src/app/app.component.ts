import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AlbumsComponent, AlbumPhotosComponent, AlbumDetailComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'New Project';

}
