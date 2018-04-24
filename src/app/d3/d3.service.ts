import { Injectable, EventEmitter } from '@angular/core';
import { Bar, BarChart } from './models';
import * as d3 from 'd3';
import { Options } from './visuals/shared';
import { Slice } from '.';
import { PieChart } from './models/pie-chart';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
    * while maintaining the d3 simulations physics
    */
  constructor() { }

  getBarChart(bars: Bar[], options: Options) {
    const sg = new BarChart(bars, options);
    return sg;
  }

  getPieChart(slices: Slice[], options: Options) {
    const sg = new PieChart(slices, options);
    return sg;
  }
}
