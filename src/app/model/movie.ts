export class Movie {
    id: number;
    title: string;
    year: number;
    rating: string;
    director: string;
  static id: any;
  static getMovieById: any;
  
    constructor(
      id: number = 0,
      title: string = "",
      year: number = 0,
      rating: string = "",
      director: string = ""
    ) {
      this.id = id;
      this.title = title;
      this.year = year;
      this.rating = rating;
      this.director = director;
    }
  
    details(): string {
      return `Movie id ${this.id}: ${this.title} (${this.year}), rated ${this.rating}, directed by: ${this.director}`;
    }
  }