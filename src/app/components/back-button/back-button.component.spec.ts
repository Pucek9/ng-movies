import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Location} from '@angular/common';

import {BackButtonComponent} from './back-button.component';
import {MdbIconComponent} from 'angular-bootstrap-md';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [Location],
      declarations: [BackButtonComponent, MdbIconComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
