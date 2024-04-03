import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Albums} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumUrl = "https://jsonplaceholder.typicode.com/albums";
  constructor(private client: HttpClient) {
  }

  getAlbum(albumId: number | undefined): Observable<Albums>{
    const url = `${this.albumUrl}/${albumId}`;
    return this.client.get<Albums>(url);
  }
  getAlbums(): Observable<Albums[]>{
    return this.client.get<Albums[]>(this.albumUrl)
  }
  deleteAlbum(albumId: number): Observable<void> {
    return this.client.delete<void>(`${this.albumUrl}/${albumId}`);
  }

  updateAlbum(albumId: number | undefined, newTitle: string): Observable<void> {
    const url = `${this.albumUrl}/${albumId}`;
    const updatedAlbum = { title: newTitle }; // Создаем объект с новым названием альбома
    return this.client.put<void>(url, updatedAlbum);
  }

}
