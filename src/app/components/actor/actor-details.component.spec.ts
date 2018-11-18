import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActorDetailsComponent} from './actor-details.component';
import {BackButtonComponent} from '../back-button';
import {MdbCardBodyComponent, MdbCardTextComponent, MdbCardTitleComponent} from 'angular-bootstrap-md';

describe('ActorDetailsComponent', () => {
  let component: ActorDetailsComponent;
  let fixture: ComponentFixture<ActorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActorDetailsComponent, BackButtonComponent, MdbCardTitleComponent, MdbCardTextComponent, MdbCardBodyComponent]
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
