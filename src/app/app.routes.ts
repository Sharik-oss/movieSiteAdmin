import {Routes} from '@angular/router';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {AllmoviesComponent} from './allmovies/allmovies.component';
import {UpdateMovieComponent} from './update-movie/update-movie.component';
import { WholePageComponent } from './whole-page/whole-page.component';
import { AddAdComponent } from './add-ad/add-ad.component';
import { mainGuard } from './guards/main.guard';
import { AdsComponent } from './ads/ads.component';

export const routes: Routes = [
  {
    path: '',
    component: WholePageComponent,
  },
  {
    path: 'movies',
    component: AllmoviesComponent
  },
  
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'addMovie',
    component: AddMovieComponent
  },
  {
    path: 'updateMovie/:movieId',
    component: UpdateMovieComponent,

  },
  {
    path: 'addAd',
    component: AddAdComponent
  }
];
