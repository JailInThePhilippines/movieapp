import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-player',
  templateUrl: './series-player.component.html',
  styleUrls: ['./series-player.component.css'],
})
export class SeriesPlayerComponent implements OnInit {
  series: any;
  selectedEpisodeUrl: SafeResourceUrl = '';
  selectedEpisodeNumber: number | null = null;  // New property to store the selected episode number
  tvshows: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        const id = params['id'];
        return this.dataService.getTVShowDetails(id);
      })
    ).subscribe((data) => {
      this.series = data;
    });

    this.getSeries();
  }

  getSeries() {
    this.dataService.getTVShows().subscribe((data: any) => {
      this.tvshows = data;
    });
  }

  getSlicedSeries() {
    return this.shuffleArray(this.tvshows).slice(0, 6);
  }

  playEpisode(season: number, episode: number) {
    const id = this.route.snapshot.params['id'];
    const url = `https://vidsrc.to/embed/tv/${id}/${season}/${episode}`;
    this.selectedEpisodeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.selectedEpisodeNumber = episode;  // Store the selected episode number
  }

  navigateToSeries(seriesId: number) {
    this.selectedEpisodeUrl = ''; // Reset the selected episode URL
    this.selectedEpisodeNumber = null; // Reset the selected episode number
    this.router.navigate(['/series-player', seriesId]);
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
