import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';

import {DataGridComponent} from './data-grid.component';
import {initializeRootState} from '../../store/root/root.state';
import {MockStore} from '../../store/mock.store';
import {MdbIconComponent} from 'angular-bootstrap-md';



describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: Store, useValue: new MockStore(initializeRootState())}],
      declarations: [DataGridComponent, MdbIconComponent]
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
