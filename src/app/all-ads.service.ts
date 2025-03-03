import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllAdsService {

  url = "https://backend.ultrafilms.pro"

  constructor(private http: HttpClient) { }

  getAllAds(){
    return this.http.get(`${this.url}/ad`)
  }


  deleteAd(id: number){
    return this.http.delete(`${this.url}/delete/ad/${id}`)
  }
}
