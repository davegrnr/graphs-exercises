class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach(v => {
      this.nodes.add(v)
    })
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of this.nodes){
      if(node.adjacent.has(vertex)){
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function traverse(vertex) {
      // base case
      if (!vertex) {
        return null;
      }
      // visit node
      visited.add(vertex);
      result.push(vertex.value);

      // visit neighbors
      vertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          return traverse(neighbor);
        }
      });
    }

    traverse(start);

    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    // Create an empty queue
    const queue = [start];
    const result = [];
    const visited = new Set();
    let currentVertex;

    // visit node
    visited.add(start);

    // While there is still remaining vertices in queue
    while (queue.length) {
      currentVertex = queue.shift();
      console.log("VISITING: ", currentVertex)
      result.push(currentVertex.value);

      // visit neighbors
      currentVertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();
// let a = new Node("A");
// let b = new Node("B");
// let c = new Node("C");
// let d = new Node("D");
// graph.addVertices([a, b, c, d]);
// graph.addEdge(a, b);
// graph.addEdge(a, c);
// graph.addEdge(b, d);
// graph.addEdge(c, d);



let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');
graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

module.exports = {Graph, Node}