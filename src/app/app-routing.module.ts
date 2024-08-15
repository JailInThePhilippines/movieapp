import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MovieComponent } from './movie/movie.component';
import { PlayerComponent } from './player/player.component';
import { SeriesPlayerComponent } from './series-player/series-player.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'tvshows', component: TvshowsComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'series-player/:id', component: SeriesPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }