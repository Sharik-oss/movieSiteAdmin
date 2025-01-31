import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AllMoviesService } from '../services/all-movies.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MovieUpdateService} from '../services/movie-update.service';
import {routes} from '../app.routes';


@Component({
  selector: 'app-allmovies',
  imports: [MatIconModule,
     MatButtonModule,
     MatIconModule,
     FormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatCardModule,
    CommonModule,
    MatCheckboxModule,
  ],
  templateUrl: './allmovies.component.html',
  styleUrl: './allmovies.component.scss'
})
export class AllmoviesComponent implements OnInit {
  value = '';
  allMovies = inject(AllMoviesService);
  allMoviesList: any[] = [];
  movies: any[] = [];
  router = inject(Router);
  updateMovieService = inject(MovieUpdateService);


  ngOnInit() {
    this.getMovies();
  }


  getMovies() {
    this.allMovies.getAllMovies().subscribe((movies: any) => {
      this.allMoviesList = movies;
      this.movies = movies;
    })
  }


  navigateMovieProperties(link: String) {
    this.router.navigate([link])
  }

  navigateToUpdate(link: string, id: number) {
    this.router.navigate([link], { queryParams: { id } })
  }

  deleteMovie(id: number){
    this.allMovies.deleteMovie(id).subscribe()
    this.getMovies();
  }
  changeStatus(){

  }


  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    this.allMovies.getAllMovies().subscribe((movies: any) => {
      this.movies = movies.filter((movie: any) =>
        movie.name.toLowerCase().includes(value)
      );
    });
  }
}
