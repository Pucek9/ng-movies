import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login';
import {MovieListComponent, MovieDetailsComponent, HeaderComponent, AlertComponent} from './components';
import {AlertService} from './services';
import {rootReducer} from './store/root/root.reducer';
import {RootEffects} from './store/root/root.effects';
import {DataGridComponent} from './components/data-grid/data-grid.component';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterModule} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { PaginationComponent } from './pagination/pagination.component';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
