import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {Editor} from 'ngx-editor';
import {AddmovieService} from '../services/addmovie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieUpdateService} from '../services/movie-update.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {routes} from '../app.routes';

@Component({
  selector: 'app-update-movie',
  imports: [
    FormsModule,
    MatCheckbox,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule
  ],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.scss'
})
export class UpdateMovieComponent {
  genreList: string[] = [
    "ანიმაცია", "ბიოგრაფია", "დეტექტივი", "დოკუმენტური", "დრამა", "ვესტერნი",
    "კრიმინალური", "კომედია", "ისტორიული", "მელოდრამა", "მისტიური", "მიუზიკლი",
    "ეროტიული", "მძაფრსიუჟეტიანი", "საახალწლო", "რომანტიკული", "ზღაპრული",
    "სათავგადასავლო", "საომარი", "საოჯახო", "საშინელება", "სპორტული",
    "ტრილერი", "საბავშვო", "ფანტასტიკა"
  ];
  movieId: string | null = null;
  resolutions: string[] = ['Full HD', '4K HDR'];
  movieTypes: string[] = ['Top', 'New'];


  editor!: Editor;
  private updateService = inject(MovieUpdateService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

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
    console.log()
    this.editor = new Editor();
    this.route.paramMap.subscribe(params => {
      const routeId = params.get('id'); // Get ID from route `/updateMovie/14`
      const queryId = this.route.snapshot.queryParamMap.get('id'); // Get ID from `?id=14`

      // Use either ID (route ID has priority)
      this.movieId = routeId || queryId || '';
      console.log('Movie ID:', this.movieId);

      // Fetch movie details and populate the form
      if (this.movieId) {
        this.updateService.getMovieById(this.movieId).subscribe(movie => {
          this.movieProperties.patchValue(movie); // Populate form
        });
      }
    });
    // Listen for genre selection changes
    this.genre.valueChanges.subscribe(selectedGenres => {
      console.log('Selected Genres:', selectedGenres);
    });
  }

  updateMovie() {
    if (this.movieProperties.valid) {
      this.updateService.updateMovie(this.movieProperties.value, this.movieId).subscribe({
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
