class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Thêm đỉnh vào đồ thị
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Thêm cạnh vào đồ thị
    addEdge(vertex1, vertex2) {
      // Với đồ thị vô hướng, thêm cả hai chiều
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    // In ra danh sách kề của đồ thị
    printGraph() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " --> " + this.adjacencyList[vertex].join(', '));
      }
    }
}


class GraphMatrix {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjacencyMatrix = Array(vertices).fill().map(() => Array(vertices).fill(0));
    }
  
    // Thêm cạnh vào ma trận kề
    addEdge(vertex1, vertex2) {
      this.adjacencyMatrix[vertex1][vertex2] = 1;  // Đối với đồ thị vô hướng, cũng cần thêm chiều ngược lại
      this.adjacencyMatrix[vertex2][vertex1] = 1;
    }
  
    // In ra ma trận kề
    printGraph() {
      console.log(this.adjacencyMatrix.map(row => row.join(' ')).join('\n'));
    }
}
  
class GraphBFS {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    bfs(start) {
      let visited = {};
      let queue = [start];
      visited[start] = true;
  
      while (queue.length) {
        let vertex = queue.shift();
        console.log(vertex);
  
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
    }
}
  

class GraphDFS {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    dfs(vertex, visited = {}) {
      if (!vertex) return;
      visited[vertex] = true;
      console.log(vertex);
  
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          this.dfs(neighbor, visited);
        }
      });
    }
}
  

// Sử dụng
let graph = new Graph();

// Thêm đỉnh vào đồ thị
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Thêm các cạnh
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

// In ra đồ thị
graph.printGraph();

let graphMatrix = new GraphMatrix(4);  // Đồ thị có 4 đỉnh (0, 1, 2, 3)

// Thêm các cạnh
graphMatrix.addEdge(0, 1);
graphMatrix.addEdge(0, 2);
graphMatrix.addEdge(1, 3);
graphMatrix.addEdge(2, 3);

// In ra ma trận kề
graphMatrix.printGraph();

let graphBFS = new GraphBFS();
graphBFS.addVertex("A");
graphBFS.addVertex("B");
graphBFS.addVertex("C");
graphBFS.addVertex("D");
graphBFS.addEdge("A", "B");
graphBFS.addEdge("A", "C");
graphBFS.addEdge("B", "D");
graphBFS.addEdge("C", "D");

graphBFS.bfs("A");  // Output: A B C D

let graphDFS = new GraphDFS();
graphDFS.addVertex("A");
graphDFS.addVertex("B");
graphDFS.addVertex("C");
graphDFS.addVertex("D");
graphDFS.addEdge("A", "B");
graphDFS.addEdge("A", "C");
graphDFS.addEdge("B", "D");
graphDFS.addEdge("C", "D");

graphDFS.dfs("A");  // Output: A B D C
