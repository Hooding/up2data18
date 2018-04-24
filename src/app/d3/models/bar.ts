import APP_CONFIG from '../../app.config';

export class Bar {
  label: string;
  frequency: number;

  x?: number;
  y?: number;
  width?: number;
  height?: number;
  _color?: any;

  constructor(label: string, frequency: number, color?: any) {
    this.label = label;
    this.frequency = frequency;
    this._color = color;
  }

  get color() {
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.frequency);
    return !this._color ? APP_CONFIG.SPECTRUM[index] : this._color;
  }
}