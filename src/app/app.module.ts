import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MovieListComponent,
  MovieDetailsComponent,
  HeaderComponent, AlertComponent,
  DataGridComponent,
  PaginationComponent,
  LoginComponent,
  ActorDetailsComponent,
  BackButtonComponent,
} from './components';
import {AlertService} from './services';
import {rootReducer} from './store/root/root.reducer';
import {RootEffects} from './store/root/root.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AlertComponent,
    MovieListComponent,
    MovieDetailsComponent,
    DataGridComponent,
    PaginationComponent,
    ActorDetailsComponent,
    BackButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot([rootReducer, routerReducer]),
    EffectsModule.forRoot([RootEffects]),
    RouterModule.forRoot([
      // routes
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 10}),
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
