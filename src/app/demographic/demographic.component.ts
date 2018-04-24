import {
  Component,
  OnInit
} from '@angular/core';
import {
  LocationStrategy,
  PlatformLocation,
  Location
} from '@angular/common';
import {
  LegendItem,
  ChartType
} from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {
  Options
} from '../d3/visuals/shared';
import {
  Bar
} from '../d3';
import { Slice } from '../d3/models/slice';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {
  slices: Slice[] = new Array();
  pieData;

  bars: Bar[] = new Array();
  // barchartOptions: Options = { width: 960, height: 500, left: 40, top: 20, right: 20, bottom: 30};
  barchartOptions: Options = {
    width: 400,
    height: 300,
    left: 40,
    top: 20,
    right: 20,
    bottom: 30,
    orientation: 'horizontal'
  };

  piechartOptions: Options = {
    width: 400,
    height: 300,
    left: 40,
    top: 20,
    right: 20,
    bottom: 30
  };

  constructor() {
    this.generateBarChartStub();
    this.generatePieChartStub();
  }

  ngOnInit() {}

  generateBarChartStub() {
    for (let i = 0; i < 5; i++) {
      this.bars[i] = new Bar(`val${i}`, Math.random());
    }
  }

  generatePieChartStub() {
    this.pieData = [];

    for (let i = 0; i < 5; i++) {
      const item = {label: `val${i}`, value: Math.random()};
      this.pieData.push(item);
      this.slices.push(new Slice(item.label, item.value));
    }
  }
}