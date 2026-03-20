class Graph {
    constructor() {
        this.verteces = [];
        this.edges = new Map();
    }
    addVertex(vertex) {
        if (!this.verteces.includes(vertex)) {
            this.verteces.push(vertex);
            this.edges.set(vertex, []);
        }
    }
    addEdge(from, to) {
        this.edges.get(from).push(to);
        this.edges.get(to).push(from);
    }
    traverse() {
        this.verteces.forEach((vertex) => {
            const adjacents = this.edges.get(vertex);
            console.log(`${vertex} -> ${adjacents?.join(', ')}`);
        });
    }
    BFS() {
        if (this.verteces.length === 0) {
            return;
        }
        const visited = new Set();
        const queue = [];
        queue.push(this.verteces[0]);
        while (queue.length) {
            const current = queue.shift();
            if (!visited.has(current)) {
                console.log(current);
                visited.add(current);
                const adjacents = this.edges.get(current);
                adjacents?.forEach((adjacent) => {
                    if (!visited.has(adjacent)) {
                        queue.push(adjacent);
                    }
                });
            }
        }
    }
    DFS() {
        if (this.verteces.length === 0) {
            return;
        }
        const visited = new Set();
        const stack = [];
        stack.push(this.verteces[0]);
        while (stack.length) {
            const current = stack.pop();
            if (!visited.has(current)) {
                console.log(current);
                visited.add(current);
                const adjacents = this.edges.get(current);
                for (let i = adjacents.length - 1; i >= 0; i--) {
                    const adjacent = adjacents[i];
                    if (!visited.has(adjacent)) {
                        stack.push(adjacent);
                    }
                }
            }
        }
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addVertex('I');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
// graph.traverse()
// graph.BFS()
graph.DFS();
export {};
