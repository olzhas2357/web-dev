import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AlbumsAndPhotos} from "./models";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseurl = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private client: HttpClient) { }

  getPhotos(albumId: number | undefined): Observable<AlbumsAndPhotos[]> {
    const url = `${this.baseurl}${albumId}/photos`;
    return this.client.get<AlbumsAndPhotos[]>(url);
  }
}
