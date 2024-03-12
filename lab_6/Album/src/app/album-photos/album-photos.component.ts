import {Component, OnInit} from '@angular/core';
import {AlbumsAndPhotos} from "../models";
import {PhotosService} from "../photos.service";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos!: AlbumsAndPhotos[] | undefined;
  constructor(private photosService: PhotosService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get("id"));
    this.photosService.getPhotos(albumId).subscribe((
      photos => {
        this.photos = photos;
      }
    ))
  }
  goBack(){
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate((['/albums',albumId]))
  }

}
