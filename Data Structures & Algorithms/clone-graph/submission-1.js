/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        console.log(node)
        if(!node) {return null}

        const newNodes = new Map();

        const traverse = (n) => {
            if (n === null) {return null};
            if (newNodes.has(n)) { return newNodes.get(n)};

            const copyNode = new Node(n.val);
            newNodes.set(n, copyNode);

            for (const neighbor of n.neighbors) {
                copyNode.neighbors.push(traverse(neighbor))
            }

            return copyNode;
        }
        return traverse(node);
    }
}
