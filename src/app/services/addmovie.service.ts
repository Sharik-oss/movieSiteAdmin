import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddmovieService {
  url = 'http://localhost:1043';


  constructor(private http: HttpClient) { }

  addMovie(properties: any){
    console.log(properties)
    return this.http.post(`${this.url}/movie/add`, properties)
  }

}
