import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './guards';
import {LoginComponent} from './login';
import {MoviesComponent} from './movies';
import {MovieDetailsComponent} from './movie-details';

const routes: Routes = [
  {path: '', component: MoviesComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: MovieDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
