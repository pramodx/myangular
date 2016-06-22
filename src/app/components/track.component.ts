import {CORE_DIRECTIVES, LocationStrategy} from "@angular/common";
import {OnInit, Component} from "@angular/core";
import {SpotifyService} from "../services/spotify.service";
import {RouteParams} from "@angular/router-deprecated";

@Component({
  selector: 'theTrack',
  directives: [CORE_DIRECTIVES],
  template: `
  <div *ngIf="track">
    <h1>{{ track.name }}</h1>

    <p>
      <img src="{{ track.album.images[1].url }}">
    </p>

    <p>
      <audio controls src="{{ track.preview_url }}"></audio>
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(public routeParams: RouteParams, public spotify: SpotifyService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get('id');
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }
}
