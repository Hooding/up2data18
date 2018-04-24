import { Component, OnInit, Input } from '@angular/core';
import { Bar } from '../../../models';

@Component({
  selector: '[bar-visual]',
  templateUrl: './bar-visual.component.html',
  styleUrls: ['./bar-visual.component.scss']
})
export class BarVisualComponent implements OnInit {
  @Input('bar-visual') bar: Bar;

  constructor() { }

  ngOnInit() {
  }

}
