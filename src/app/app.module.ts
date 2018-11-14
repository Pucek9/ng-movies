import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AlertComponent,
    MovieListComponent,
    MovieDetailsComponent,
    DataGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({maxAge: 10}),
    StoreModule.forRoot([rootReducer]),
    EffectsModule.forRoot([RootEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
