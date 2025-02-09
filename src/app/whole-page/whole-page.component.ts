import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AllmoviesComponent } from "../allmovies/allmovies.component";
import { AdsComponent } from "../ads/ads.component";

@Component({
  selector: 'app-whole-page',
  imports: [MatTabsModule, AllmoviesComponent, AdsComponent],
  templateUrl: './whole-page.component.html',
  styleUrl: './whole-page.component.scss'
})
export class WholePageComponent {

}
