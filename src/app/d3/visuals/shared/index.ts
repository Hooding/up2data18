export * from './bar-visual/bar-visual.component';

import { BarVisualComponent} from './bar-visual/bar-visual.component';

export const SHARED_VISUALS = [
    BarVisualComponent
];

export interface Options {
    height: number;
    width: number;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    orientation?: string;
}
