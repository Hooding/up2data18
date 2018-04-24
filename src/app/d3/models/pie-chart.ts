import APP_CONFIG from '../../app.config';
// import { d3 } from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { Slice } from './slice';
import { Options } from '../visuals/shared';

export class PieChart {
    public slices: Slice[];

    radius: number;
    color;
    pie;
    path;
    label;

    constructor(slices: Slice[], options: Options) {
        this.slices = slices;
        this.initChart(options);
    }

    initChart(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing chart');
        }

        options.width -= (options.left + options.right);
        options.height -= (options.top + options.bottom);

        this.radius = Math.min(options.width, options.height) / 2;
        this.color = d3Scale.scaleOrdinal(APP_CONFIG.SPECTRUM);
        this.pie = d3Shape.pie().sort(null).value(d => { return d.value; });
        this.path = d3Shape.arc().outerRadius(this.radius - 10).innerRadius(50);
        this.label = d3Shape.arc().outerRadius(this.radius - 40).innerRadius(this.radius - 40);

        this.initArc(options);
    }
    
    initArc(options) {
        this.slices.forEach(slice => {
            // slice.text.transform = `translate(${this.label.centroid(slice.datum)})`; // ???
            slice.text.dy = '0.35em';
            slice.path = {};
            slice.path.d = d3Shape.arc().outerRadius(this.radius - 10).innerRadius(0);
            slice.path.fill = this.color(slice.text.label);
        });
    }
}