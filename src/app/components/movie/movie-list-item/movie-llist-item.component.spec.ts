import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListItemComponent} from './movie-list-item.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MovieListItemComponent', () => {
  let component: MovieListItemComponent;
  let fixture: ComponentFixture<MovieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListItemComponent],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListItemComponent);
    component = fixture.componentInstance;
    component.data = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
