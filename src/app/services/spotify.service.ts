import {Http} from "@angular/http";
import {provide, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

@Injectable()
export class SpotifyService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(public http: Http){
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
    if (params){
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.request(queryURL).map((res:any)=>res.json());
  }

  search(query:string, type:string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchByTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }
}
export var SPOTIFY_PROVIDERS: Array<any> = [
  provide(SpotifyService, {useClass: SpotifyService})
]
