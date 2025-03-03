import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {
  url = 'https://backend.ultrafilms.pro'

  constructor(private http: HttpClient) { }


  getAllMovies(){
    return this.http.get(`${this.url}/movie`)
  }

  deleteMovie(id: number){
    return this.http.delete(`${this.url}/movie/delete/${id}`)
  }
}
