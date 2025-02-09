import { Component, inject, OnInit } from '@angular/core';
import { AllAdsService } from '../all-ads.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss'
})
export class AdsComponent  implements OnInit{
  allAds = inject(AllAdsService);
  allAdsList: any[] =[];
  ads: any[] = [];
  router = inject(Router);

  ngOnInit(){
    this.getAllAds()
  }

  navigateToAdProps(link: String){
    this.router.navigate([link])
  }

  getAllAds(){
    this.allAds.getAllAds().subscribe((ads: any)=> {
      this.allAdsList = ads;
      this.ads = ads;
    })
  }


  deleteAdById(id: number){
    this.allAds.deleteAd(id).subscribe({

    });
    this.getAllAds()
  }

}
