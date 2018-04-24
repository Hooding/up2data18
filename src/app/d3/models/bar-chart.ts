import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { Bar } from './bar';
import { ScaleBand, ScaleLinear } from 'd3';
import { Options } from '../visuals/shared';

export class BarChart {
    public bars: Bar[];

    // public xScale: ScaleBand<string>;
    // public yScale: ScaleLinear<number, number>;
    public xScale; 
    public yScale;

    constructor(bars: Bar[], options: Options) {
        this.bars = bars;
        this.initChart(options);
    }

    initChart(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing chart');
        }

        options.width -= (options.left + options.right);
        options.height -= (options.top + options.bottom);

        this.initAxis(options);
        this.initBars(options);
    }

    initAxis(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing axis');
        }

        if (!options.orientation || options.orientation === 'vertical') {
            this.xScale = d3Scale.scaleBand().rangeRound([0, options.width]).padding(0.1);
            this.xScale.domain(this.bars.map(d => d.label));
            this.yScale = d3Scale.scaleLinear().rangeRound([options.height, 0]);
            this.yScale.domain([0, d3Array.max(this.bars, d => d.frequency)]);
        } else { // horizontal
            this.xScale = d3Scale.scaleLinear().rangeRound([0, options.width]);
            this.xScale.domain([0, d3Array.max(this.bars, d => d.frequency)]);
            this.yScale = d3Scale.scaleBand().rangeRound([0, options.height]).padding((options.height * 0.1) / (this.bars.length + 1) / 10);
            this.yScale.domain(this.bars.map(d => d.label));
        }
    }

    initBars(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing bars');
        }

        if (!this.xScale || !this.yScale) {
            throw new Error('axis not initialized yet');
        }

        this.bars.forEach(d => {
            if (!options.orientation || options.orientation === 'vertical') {
                d.x = this.xScale(d.label);
                d.y = this.yScale(d.frequency);
                d.width = this.xScale.bandwidth();
                d.height = options.height - this.yScale(d.frequency);
            } else { // horizontal
                d.x = 0;
                d.y = this.yScale(d.label);
                d.width = this.xScale(d.frequency);
                d.height = this.yScale.bandwidth();
            }
        });
    }
}
