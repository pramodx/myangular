import {ROUTER_DIRECTIVES, RouteConfig, Router} from "@angular/router-deprecated";
import {SearchComponent} from "./components/search.component";
import {ArtistComponent} from "./components/artist.component";
import {TrackComponent} from "./components/track.component";
import {AlbumComponent} from "./components/album.component";
import {Component} from "@angular/core";
@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {path: '/', name: 'root', redirectTo: ['Search']},
  {path: '/search', name: 'Search', component: SearchComponent },
  { path: '/artists/:id', name: 'Artists', component: ArtistComponent },
  { path: '/tracks/:id', name: 'Tracks', component: TrackComponent },
  { path: '/albums/:id', name: 'Albums', component: AlbumComponent }
])
export class AppComponent {
  query: string;
  constructor(public router: Router){

  }
}
