import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login';
import {MoviesComponent} from './movies';
import {HeaderComponent} from './header';
import {MovieComponent} from './movie';
import {MovieDetailsComponent} from './movie-details';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    HeaderComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
