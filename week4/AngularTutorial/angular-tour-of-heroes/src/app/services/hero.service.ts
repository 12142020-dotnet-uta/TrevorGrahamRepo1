import { Injectable } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import {Observable, of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Observable<Hero[]>{
    return of (HEROES);
  }
}
