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
  movies!: any;
  router = inject(Router);


  ngOnInit() {
    this.getMovies();
  }


  getMovies() {
    this.allMovies.getAllMovies().subscribe((movie: any) => {
      this.movies = movie;
      console.log(this.movies);

    })
  }


  navigateToAddMovie(link: String){
    this.router.navigate([link])
  }
}
