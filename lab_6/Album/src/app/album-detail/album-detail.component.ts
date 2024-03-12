import {Component, Input, OnInit} from '@angular/core';
import {Albums, AlbumsAndPhotos} from "../models";
import {CommonModule} from "@angular/common";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album: Albums | undefined;
  editedTitle: string | undefined = '';
  constructor(private albumsService: AlbumsService, private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(albumId).subscribe((album: Albums | undefined) => {
      this.album = album;
      this.editedTitle = album?.title;
    });
  }
  // saveTitle(){
  //    if(this.album){
  //      if (this.editedTitle != null) {
  //        this.album.title = this.editedTitle;
  //         console.log(this.album.title)
  //        console.log(this.editedTitle)
  //         this.albumsService.updateAlbum(this.album).subscribe(()=>{
  //           this.router.navigate(['/albums']);
  //         });
  //      }
  //    }
  // }
  saveTitle(){
    if(this.editedTitle !== undefined && this.editedTitle.trim()!==''){
      console.log('New album title:', this.editedTitle);
      this.albumsService.updateAlbum(this.album?.id, this.editedTitle).subscribe(() => {
        console.log('Album title updated successfully');
        this.router.navigate(['/albums']); });
    }
    console.log(this.editedTitle)
  }
  goPhotos(){
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/albums', albumId, 'photos'])
  }
  goBack(){
    this.router.navigate((['/albums']))
  }

}
