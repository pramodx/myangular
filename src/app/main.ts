
import { provide} from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT } from "@angular/router-deprecated";

import {HTTP_PROVIDERS} from "@angular/http";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";

/*
 *SERVICES
 */
import {SPOTIFY_PROVIDERS} from "./services/spotify.service";

import {AppComponent} from "./app.component";


bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  SPOTIFY_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
  provide(APP_BASE_HREF, {useValue:'/'}),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch((err: any)=> console.error(err));
