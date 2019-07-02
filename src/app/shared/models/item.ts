import * as uuid from 'uuid';

export class Item {
    name: string;
    uId: string;
    children: Item[];

    constructor(options: {
        name: string,
        children?: Item[]
    }) {
        this.name = options.name;
        this.uId = uuid.v4();
        this.children = options.children || [];
    }
}