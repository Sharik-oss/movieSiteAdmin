import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddmovieService {
  url = 'https://backend.ultrafilms.pro';


  constructor(private http: HttpClient) { }

  addMovie(properties: any){
    console.log(properties)
    return this.http.post(`${this.url}/movie/add`, properties)
  }

}
