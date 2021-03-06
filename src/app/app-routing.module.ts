import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './guards';
import {MovieListComponent, MovieDetailsComponent, LoginComponent, ActorDetailsComponent} from './components';

const routes: Routes = [
  {path: 'page/:nr', component: MovieListComponent, canActivate: [AuthGuard]},
  {path: 'movie/:id', component: MovieDetailsComponent, canActivate: [AuthGuard]},
  {path: 'actor/:id', component: ActorDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: 'page/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
