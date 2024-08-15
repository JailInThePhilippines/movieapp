import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css',
})
export class TvshowsComponent implements OnInit {
  tvshows: any[] = [];
  genres: any = {};
  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows() {
    this.dataService.getTVShows().subscribe((data: any) => {
      this.tvshows = data;
    });
  }

  openTVShowDetails(id: number) {
    this.router.navigate(['/series-player', id]);
  }
}
