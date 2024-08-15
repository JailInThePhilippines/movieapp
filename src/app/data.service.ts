import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://movieapp-zyqr.onrender.com/api/v1';

  constructor(private http: HttpClient) { }

  //movies
  getMovies() {
    return this.http.get('https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies');
  }

  getMovieDetails(id: number) {
    return this.http.get(`https://movieapp-zyqr.onrender.com/api/v1/details/${id}`);
  }

  getGenre(id: number) {
    return this.http.get('https://movieapp-zyqr.onrender.com/api/v1/genre/' + id);
  }

  getGenreList() {
    return this.http.get('https://movieapp-zyqr.onrender.com/api/v1/genre_list');
  }

  getPopularMovies() {
    return this.http.get('https://movieapp-zyqr.onrender.com/api/v1/popular');
  }

  getTopRatedMovies() {
    return this.http.get('https://movieapp-zyqr.onrender.com/api/v1/toprated_movies');
  }

  //tvshows
  getTVShows() {
    return this.http.get('https://movieapp-zyqr.onrender.com/api/v2/tvshows');
  }

  getTVShowDetails(id: number) {
    return this.http.get(`https://movieapp-zyqr.onrender.com/api/v2/tvshows_overview/${id}`);
  }

  // search
  searchMovieByName(movieName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie_name/${movieName}`);
  }

  //filter by genre
  filterByGenre(id: number): Observable<any> {
    return this.http.get(`https://movieapp-zyqr.onrender.com/api/v1/genre/${id}`);
  }

}
