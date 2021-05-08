class KnightBoard {
  adjacentList: any;
  constructor() {
    this.adjacentList = [];
  }
  
  addSquare(x: number, y: number): number[] {
    this.adjacentList[`${x},${y}`] = [];
    return [x, y];
  }
  
  addEdge(square1: number[], square2: number[]): void {
    this.adjacentList[`${square1[0]},${square1[1]}`].push(square2);
  }
  
  knightPositions(x: number, y: number, n: number): void {
    let square = this.addSquare(x, y);
    if (x + 2 < n && y + 1 < n) {
      this.addEdge(square, [x + 2, y + 1]);
    }
    if (x - 2 >= 0 && y + 1 < n) {
      this.addEdge(square, [x - 2, y + 1]);
    }
    if (x + 2 < n && y - 1 >= 0) {
      this.addEdge(square, [x + 2, y - 1]);
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
      this.addEdge(square, [x - 2, y - 1]);
    }
    if (x + 1 < n && y + 2 < n) {
      this.addEdge(square, [x + 1, y + 2]);
    }
    if (x + 1 < n && y - 2 >= 0) {
      this.addEdge(square, [x + 1, y - 2]);
    }
    if (x - 1 >= 0 && y + 2 < n) {
      this.addEdge(square, [x - 1, y + 2]);
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
      this.addEdge(square, [x - 1, y - 2]);
    }
  }

  allKnightPositions(x: number, y: number, n: number) {
    if (!this.adjacentList[`${x},${y}`]) {
      this.knightPositions(x, y, n);
      this.adjacentList[`${x},${y}`].map((child: any) =>
        this.allKnightPositions(child[0], child[1], n)
      );
    }
  }

  
}

export default KnightBoard;
