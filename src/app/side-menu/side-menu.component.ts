import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
  genres: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.dataService.getGenreList().subscribe((data: any) => {
      this.genres = data;
    });
  }

  filterByGenre(genreId: number) {
    this.router.navigate(['/movies'], { queryParams: { genre: genreId } });
  }
}