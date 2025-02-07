import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgxEditorModule, Editor } from 'ngx-editor';
import { AddmovieService } from '../services/addmovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgxEditorModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent implements OnInit, OnDestroy {
  genreList: string[] = [
    "ანიმაცია", "ბიოგრაფია", "დეტექტივი", "დოკუმენტური", "დრამა", "ვესტერნი",
    "კრიმინალური", "კომედია", "ისტორიული", "მელოდრამა", "მისტიური", "მიუზიკლი",
    "ეროტიული", "მძაფრსიუჟეტიანი", "საახალწლო", "რომანტიკული", "ზღაპრული",
    "სათავგადასავლო", "საომარი", "საოჯახო", "საშინელება", "სპორტული",
    "ტრილერი", "საბავშვო", "ფანტასტიკა"
  ];

  resolutions: string[] = ['Full HD', '4K HDR'];
  movieTypes: string[] = ['Top', 'New'];

  editor!: Editor;
  private addMovieService = inject(AddmovieService);
  private router = inject(Router);

  // Form Controls
  name = new FormControl('');
  description = new FormControl('');
  active = new FormControl(false);
  movie_url = new FormControl('');
  poster_url = new FormControl('');
  year = new FormControl('');
  resolution = new FormControl('');
  type = new FormControl('');
  genre = new FormControl<string[]>([]); // Multi-select

  // Form Group
  movieProperties = new FormGroup({
    name: this.name,
    description: this.description,
    active: this.active,
    movie_url: this.movie_url,
    poster: this.poster_url,
    year: this.year,
    genre: this.genre, // Using FormControl instead of separate array
    movieType: this.type,
    resolution: this.resolution,
  });

  ngOnInit(): void {
    this.editor = new Editor();
    this.resolution.valueChanges.subscribe(value => {
      console.log(value, "Resolution");
    })
    this.type.valueChanges.subscribe(value => {
      console.log(value, "Movie Type");
    })
    // Listen for genre selection changes
    this.genre.valueChanges.subscribe(selectedGenres => {
      console.log('Selected Genres:', selectedGenres);
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  addMovie() {
    if (this.movieProperties.valid) {
      this.addMovieService.addMovie(this.movieProperties.value).subscribe({
        next: () => {
          console.log('Movie added successfully!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error adding movie:', err)
      });
    } else {
      console.warn('Form is not valid!');
    }
  }
}
