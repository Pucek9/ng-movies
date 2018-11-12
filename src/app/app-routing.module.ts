import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './guards';
import {LoginComponent} from './components/login';
import {MovieListComponent, MovieDetailsComponent} from './components/movie';

const routes: Routes = [
  {path: '', component: MovieListComponent, canActivate: [AuthGuard]},
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
