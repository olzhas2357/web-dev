import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Albums, AlbumsAndPhotos} from "../models";
import {AlbumsService} from "../albums.service";
import {Router} from "@angular/router";
import {PhotosService} from "../photos.service";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, AlbumDetailComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[] | undefined;
  constructor(private albumsService:AlbumsService , private router: Router,private photosService: PhotosService) { }
  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe( (albums) =>{
      this.albums = albums;
    });
  }
  openAlbumDetail(albumId: number){
    this.router.navigate(['/albums', albumId]);
  }

  delete(albumId: number){
      this.albumsService.deleteAlbum(albumId).subscribe(()=>{
        this.albums = this.albums?.filter(album => album.id !== albumId)
      })
  }
}
