

import {Injectable} from "@angular/core";
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
@Injectable()
export class HeroService {
  getHeroes(){
    return HEROES;
  }
}
