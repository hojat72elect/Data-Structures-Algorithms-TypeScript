export class Stack {
    private dataSource: any[];
    length: number;

    constructor() {
        this.dataSource = [];
        this.length = 0;
    }

    push(value: any) {
        this.dataSource.push(value);
        this.length++;
    }

    peek(): any {
        if (this.length === 0) {
            return null;
        }
        return this.dataSource[this.length - 1];
    }

    pop(): any {
        if (this.length === 0) {
            throw new Error("The stack is empty!!!");
        }
        this.length--;
        return this.dataSource.pop();
    }

    clear() {
        this.dataSource = [];
        this.length = 0;
    }

    toString() {
        let stringRepresentation = "";
        [...this.dataSource].reverse().map((stackElement: any) => {
            stringRepresentation += ` ${stackElement} -> `;
        });
        return stringRepresentation
    }
}