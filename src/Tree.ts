export class TreeNode {
    value: any;
    descendants: TreeNode[]

    constructor(value: any) {
        this.value = value;
        this.descendants = [];
    }
}