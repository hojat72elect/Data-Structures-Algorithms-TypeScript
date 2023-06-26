import {TreeNode} from "../src/TreeNode";

describe('Simple behavior of a Tree data structure', () => {

    test('A rudimentary tree with 5 nodes', () => {
        // Define all the nodes
        const abe = new TreeNode('Abe');
        const homer = new TreeNode('Homer');
        const bart = new TreeNode('Bart');
        const lisa = new TreeNode('Lisa');
        const maggie = new TreeNode('Maggie');

        // Add all the nodes to the root of the tree
        abe.descendants.push(homer);
        homer.descendants.push(bart, lisa, maggie);
        expect(typeof abe).toBe("object");
        expect(abe.value).toBe("Abe");
        expect(abe.descendants).toEqual([{
            "descendants": [{"descendants": [], "value": "Bart"}, {
                "descendants": [],
                "value": "Lisa"
            }, {"descendants": [], "value": "Maggie"}], "value": "Homer"
        }]);

        const theOnlyDirectChild = abe.descendants.pop();

        expect(theOnlyDirectChild.value).toBe("Homer");
        expect(theOnlyDirectChild.descendants.map((node) => {
            return node.value;
        })).toStrictEqual(["Bart", "Lisa", "Maggie"]);

    })

});