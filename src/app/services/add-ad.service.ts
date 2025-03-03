import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAdService { 
  url = 'https://backend.ultrafilms.pro';

  constructor(private http: HttpClient) { }

  addAd(properties: any){
    console.log(properties)
    return this.http.post(`${this.url}/ad/add`, properties)
  }


}
