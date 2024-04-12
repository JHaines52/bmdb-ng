import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';


const URL: string = 'http://localhost:8080/api/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {


  constructor(private http: HttpClient) {

  }

  // initializeMovies() {
  //   this.movies = [];
  //   let lotr: Movie = new Movie(1, 'The Lord of the Rings: The Fellowship of the Ring', 2001,'PG-13', 'Peter Jackson');
  //   let lotrtt: Movie = new Movie(2, 'The Lord of the Rings: The Two Towers', 2002, 'PG-13', 'Peter Jackson');
  //   let lotrrk: Movie = new Movie(3, 'The Lord of the Rings: The Return of the King', 2003, 'PG-13', 'Peter Jackson');
  //   let hobbit: Movie = new Movie(4, 'The Hobbit: An Unexpected Journey', 2012, 'PG-13','Peter Jackson');

  //   this.movies.push(lotrtt);
  //   this.movies.push(lotr);
  //   this.movies.push(lotrrk);
  //   this.movies.push(hobbit);
  // }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get(URL+"/") as Observable<Movie[]>;
  }

  getMovieById(id: number): Observable<Movie> {
   return this.http.get(URL + '/' +id) as Observable<Movie>;
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post(URL, movie) as Observable<Movie>;
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put(URL+"/"+movie.id, movie) as Observable<Movie>;
  }

  deleteMovie(id: number): Observable<boolean> {
 
    return  this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
}