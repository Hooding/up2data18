export class Slice {
    frequency: number;
    path: {
        d?: string,
        fill?: string
    }
    text: {
        transform?,
        dy?: string,
        label?: string;
    };
    datum;

    constructor(label: string, frequency: number) {
        this.text = {};
        this.text.label = label;
        this.frequency = frequency;
    }
}