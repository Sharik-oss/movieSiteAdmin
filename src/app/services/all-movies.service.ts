import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  getAllMovies(){
    return this.http.get(`${this.url}/movie`)
  }
}
