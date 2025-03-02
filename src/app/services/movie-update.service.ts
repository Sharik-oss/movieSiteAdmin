import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieUpdateService {
  url = 'https://backend.ultrafilms.pro'


  constructor(private http: HttpClient) { }


  updateMovie(properties: any, id: any) {
    return this.http.patch(`${this.url}/movie/update/${id}`, properties)
  }

  getMovieById(id: any){
    return this.http.get(`${this.url}/movie/${id}`)
  }
}
