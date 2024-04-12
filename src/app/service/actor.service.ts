import { Injectable } from '@angular/core';
import { Actor } from '../model/actor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL: string = 'http://localhost:8080/api/actors';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor(private http: HttpClient){

  }
  // actors: Actor[] = [];
  // static id: any;

  // constructor() {
  //   if (this.actors.length == 0) {
  //     this.initializeActors();
  //   }
  // }

  // initializeActors() {
  //   this.actors = [];
  //   let a1: Actor = new Actor(1, 'Orlando', 'Bloom', 'male', new Date('1990-01-01'));
  //   let a2: Actor = new Actor(2, 'Cate', 'Blanchett', 'female', new Date('1969-05-14'));
  //   let a3: Actor = new Actor(3, 'Sean', 'Astin', 'male', new Date('1971-02-25'));
  //   let a4: Actor = new Actor(4, 'Ian', 'McKellen', 'male', new Date('1939-05-25'));

  //   this.actors.push(a1);
  //   this.actors.push(a2);
  //   this.actors.push(a3);
  //   this.actors.push(a4);
  // }

  getAllActors(): Observable<Actor[]> {
    return this.http.get(URL+"/") as Observable<Actor[]>;
  }

  // getActorById(id: number): Actor {
  //   let a: Actor = new Actor();
  //   for (const actor of this.actors) {
  //     if (actor.id == id) {
  //       a = actor;
  //     }
  //   }
  //   return a;
  // }

  // createActor(actor: Actor): Actor {
  //   this.actors.push(actor);
  //   return actor;
  // }

  // updateActor(actor: Actor): void {
  //   console.log('updateActor not yet implemented');
  // }

  // deleteActor(id: number): boolean {
  //   let success: boolean = false;
  //   let m: Actor = this.getActorById(id);
  //   if (m.id != 0) {
  //     let index: number = this.actors.indexOf(m);
  //     this.actors.splice(index, 1);
  //     success = true;
  //   } else {
  //     console.log('Error - movie id not found for id: ' + id);
  //   }

  //   return success;
  // }
}
