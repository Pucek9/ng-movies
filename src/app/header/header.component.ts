import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  logoutEvent = new EventEmitter<string>();

  @Input()
  user;

  logout() {
    this.logoutEvent.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

  isLogged() {
    return this.user !== null;
  }
}
