import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as d3 from 'd3-selection';
import { PieChart } from '../../models/pie-chart';
import { Options } from '../shared';
import { D3Service } from '../..';

@Component({
  selector: ' pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  static _id = 0;
  public id: number;

  @Input('slices') slices;
  @Input('data') data;
  chart: PieChart;
  // tslint:disable-next-line:no-input-rename
  @Input('options') _options: Options;
  private oH: number;
  private oW: number;

  @Input('title') title: string;
  @Input('subtitle') subtitle: string;

  constructor(private d3Service: D3Service) {
      this.id = PieChartComponent._id++;
      
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.chart.initChart(this.options);
    this.drawPie();
  }

  ngOnInit() {
      this.oH = this._options.height;
      this.oW = this._options.width;

      this.chart = this.d3Service.getPieChart(this.slices, this.options);
  }

  ngAfterViewInit() {
      this.drawPie();
  }

  get options() {
      return this._options = {
          width: window.innerWidth < this.oW ? window.innerWidth : this.oW,
          height: window.innerHeight < this.oH ? window.innerHeight : this.oH,
          left: this._options.left,
          top: this._options.top,
          right: this._options.right,
          bottom: this._options.bottom,
          orientation: this._options.orientation
      };
  }

  drawPie() {
      const g = d3.select(`#g-piechart${this.id}`);
      const arcs = g.selectAll('g').data(this.chart.pie(this.data));

      arcs.select('path')
            .attr('d', this.chart.path)
          .attr('fill', d => { console.log(d); return this.chart.color(d.data.label); });
      arcs.select('text').attr('transform', d => { return `translate(${this.chart.label.centroid(d)})`})
        .attr('dy', '0.35em').text(d => d.data.label);
  }

  onHover(slice) {
      console.log(slice);
  }
}
