import { Component, OnInit } from '@angular/core';
import { MovieServices } from '../services/movie-services';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  movies?: any[];
  constructor(private movieService: MovieServices) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response => {
      this.movies = response.results;
    }))
  }
}
