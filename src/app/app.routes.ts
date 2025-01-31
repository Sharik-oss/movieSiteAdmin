import {Routes} from '@angular/router';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {AllmoviesComponent} from './allmovies/allmovies.component';
import {UpdateMovieComponent} from './update-movie/update-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: AllmoviesComponent
  },
  {
    path: 'addMovie',
    component: AddMovieComponent
  },
  {
    path: 'updateMovie/:movieId',
    component: UpdateMovieComponent,

  }
];
