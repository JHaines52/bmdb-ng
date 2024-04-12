import { Injectable } from '@angular/core';
import { Credit } from '../model/credit';
import { ActorService } from './actor.service';
import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const actorService = new ActorService();
// const actor = actorService.getActorById(2);

// const movieService = new MovieService();
// const movie = movieService.getMovieById(1);
const URL: string = 'http://localhost:8080/api/credits';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  constructor(private http: HttpClient){
    
  }
  // credits: Credit[] = [];
  // constructor() {
  //   if (this.credits.length == 0) {
  //     this.initializeCredits();
  //   }
  

  // initializeCredits() {
  //   this.credits = [];
  //   let c1: Credit = new Credit(1, actor, movie,'Legolas');
  // let c2: Credit = new Credit(2, actorService.getActorById(1), movieService.getMovieById(3), 'Legolas');
  //  let c3: Credit = new Credit(3, actorService.getActorById(1), movieService.getMovieById(1), 'Legolas');
  // let c4: Credit = new Credit(4, actorService.getActorById(2), movieService.getMovieById(4), 'Galadriel');
  // let c5: Credit = new Credit(5, actorService.getActorById(2), movieService.getMovieById(1), 'Galadriel');

  //   this.credits.push(c1);
  //   this.credits.push(c2);
  //   this.credits.push(c3);
  //   this.credits.push(c4);
  // }

  getAllCredits(): Observable<Credit[]> {
    return this.http.get(URL+"/") as Observable<Credit[]>;
  }

//   getCreditById(id: number): Credit {
//     let c: Credit = new Credit();
//     for (const credit of this.credits) {
//       if (credit.id == id) {
//         c = credit;
//       }
//     }
//     return c;
//   }

//   createCredit(credit: Credit): Credit {
//     this.credits.push(credit);
//     return credit;
//   }

//   updateCredit(credit: Credit): void {
//     console.log('updateCredit not yet implemented');
//   }

//   deleteCredit(id: number): boolean {
//     let success: boolean = false;
//     let c: Credit = this.getCreditById(id);
//     if (c.id != 0) {
//       let index: number = this.credits.indexOf(c);
//       this.credits.splice(index, 1);
//       success = true;
//     } else {
//       console.log('Error - credit id not found for id: ' + id);
//     }

//     return success;
//   }
}