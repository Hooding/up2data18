import { D3Service } from './../../d3.service';
import { Component, Input, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { BarChart, Bar } from './../../models';

import * as d3 from 'd3-selection';
import * as d3Axis from 'd3-axis';
import { Options } from '../shared';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
    static _id = 0;
    public id: number;

    @Input('bars') bars;
    chart: BarChart;
    // tslint:disable-next-line:no-input-rename
    @Input('options') _options: Options;
    private oH: number;
    private oW: number;

    @Input('title') title: string;
    @Input('subtitle') subtitle: string;
    @Input('percentage') percentage: boolean;
    @Input('tickCount') tickCount: number;
    @Input('orientation') orientation: string;

    constructor(private d3Service: D3Service) {
        this.id = BarChartComponent._id++;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.chart.initChart(this.options);
      this.drawAxis();
    }

    ngOnInit() {
        this.oH = this._options.height;
        this.oW = this._options.width;

        this.chart = this.d3Service.getBarChart(this.bars, this.options);
    }

    ngAfterViewInit() {
        this.drawAxis();
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

    drawAxis() {
        const g = d3.select('#g-barchart' + this.id);
        g.selectAll('g.axis').remove();
        g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + (this.options.height - this.options.top - this.options.bottom) + ')')
            .call(this.isVertical() ? d3Axis.axisBottom(this.chart.xScale) : 
                d3Axis.axisBottom(this.chart.xScale).ticks(this.tickCount || 10, this.percentage ? '%' : ''));
        g.append('g')
            .attr('class', 'axis axis--y')
            .call(this.isVertical() ? d3Axis.axisLeft(this.chart.yScale).ticks(this.tickCount || 10, this.percentage ? '%' : '') : 
                d3Axis.axisLeft(this.chart.yScale));
            // .append('text')
            // .attr('class', 'axis-title')
            // .attr('transform', 'rotate(-90)')
            // .attr('y', 6)
            // .attr('dy', '0.71em')
            // .attr('text-anchor', 'end')
            // .text('Frequency');

            // g.selectAll('.tick text').attr('font-size', '1.25em');
            g.selectAll('.tick text').attr('font-size', '1rem');
    }

    private isVertical() {
        return !this._options.orientation || this._options.orientation === 'vertical';
    }

    onHover(bar) {
        console.log(bar);
    }
}
