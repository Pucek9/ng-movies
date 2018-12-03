import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';

import {DataGridComponent} from './data-grid.component';
import {initializeRootState} from '../../store/root/root.state';
import {MockStore} from '../../store/mock.store';
import {MdbIconComponent} from 'angular-bootstrap-md';
import {PaginationComponent} from '../pagination';
import {FormsModule} from '@angular/forms';


describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;
  let mockStore;

  beforeEach(async(() => {
    mockStore = new MockStore();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      providers: [{provide: Store, useValue: mockStore}],
      declarations: [DataGridComponent, MdbIconComponent, PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
