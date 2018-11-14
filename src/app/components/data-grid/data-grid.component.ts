import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input()
  headElements: string[];
  @Input()
  elements: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
