import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MovieListComponent },
  { path: 'movie/list', component: MovieListComponent },
  { path: 'movie/create', component: MovieCreateComponent },
  { path: 'movie/detail/:id', component: MovieDetailComponent },
  { path: 'movie/edit/:id', component: MovieEditComponent },
  { path: 'actor/list', component: ActorListComponent },
  { path: 'credit/list', component: CreditListComponent },
  { path: '**', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
