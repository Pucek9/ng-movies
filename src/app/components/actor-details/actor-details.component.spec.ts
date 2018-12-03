import {APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActorDetailsComponent} from './actor-details.component';
import {BackButtonComponent} from '../back-button';
import {MdbCardBodyComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbIconComponent} from 'angular-bootstrap-md';
import {Store} from '@ngrx/store';
import {MockStore} from '../../store/mock.store';
import {initializeRootState} from '../../store/root/root.state';

describe('ActorDetailsComponent', () => {
  let component: ActorDetailsComponent;
  let fixture: ComponentFixture<ActorDetailsComponent>;
  let mockStore;

  beforeEach(async(() => {
    mockStore = new MockStore();
    TestBed.configureTestingModule({
      declarations: [ActorDetailsComponent, BackButtonComponent, MdbCardTitleComponent, MdbCardTextComponent,
        MdbCardBodyComponent, MdbIconComponent],
      providers: [
        Location,
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/my/app'},
        {provide: Store, useValue: mockStore},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
