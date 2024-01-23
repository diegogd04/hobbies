import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  baseUrl: string = "https://rememora.sitehub.es/api/v1/music/music.json"

  constructor(private http: HttpClient) { }

  public getJson(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}
