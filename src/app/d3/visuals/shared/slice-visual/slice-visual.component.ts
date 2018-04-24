import { Component, OnInit, Input } from '@angular/core';
import { Slice } from '../../../models';

@Component({
  selector: '[slice-visual]',
  templateUrl: './slice-visual.component.html',
  styleUrls: ['./slice-visual.component.scss']
})
export class SliceVisualComponent implements OnInit {
  @Input('slice-visual') slice: Slice;

  constructor() { }

  ngOnInit() {
  }

}
