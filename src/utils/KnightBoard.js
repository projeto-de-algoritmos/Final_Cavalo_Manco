class KnightBoard {
  constructor() {
    this.adjacentList = {};
  }

  addSquare(x, y) {
    this.adjacentList[[x, y]] = [];
    return [x, y];
  }

  addEdge(square1, square2) {
    this.adjacentList[square1].push(square2);
  }

  knightPositions(x, y) {
    let square = this.addSquare(x, y);
    if (x + 2 < 8 && y + 1 < 8) {
      this.addEdge(square, [x + 2, y + 1]);
    }
    if (x - 2 >= 0 && y + 1 < 8) {
      this.addEdge(square, [x - 2, y + 1]);
    }
    if (x + 2 < 8 && y - 1 >= 0) {
      this.addEdge(square, [x + 2, y - 1]);
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
      this.addEdge(square, [x - 2, y - 1]);
    }
    if (x + 1 < 8 && y + 2 < 8) {
      this.addEdge(square, [x + 1, y + 2]);
    }
    if (x + 1 < 8 && y - 2 >= 0) {
      this.addEdge(square, [x + 1, y - 2]);
    }
    if (x - 1 >= 0 && y + 2 < 8) {
      this.addEdge(square, [x - 1, y + 2]);
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
      this.addEdge(square, [x - 1, y - 2]);
    }
  }

  allKnightPositions(x, y) {
    if (!this.adjacentList[`${x},${y}`]) {
      this.knightPositions(x, y);
      this.adjacentList[`${x},${y}`].map((child) =>
        this.allKnightPositions(child[0], child[1])
      );
    }
  }

  numberOfKnightMoves(xStart, yStart, xEnd, yEnd) {
    this.allKnightPositions(xStart, yStart);
    const distance = {};
    const previous = {};
    for (let key in this.adjacentList) {
      distance[key] = Infinity;
      previous[key] = null;
    }
    distance[[xStart, yStart]] = 0;
    const adjacentListInArray = Object.entries(this.adjacentList);
    adjacentListInArray.forEach((value) => {
      const vertex = value[0];
      const edges = value[1];
      edges.forEach((edge) => {
        const tempDistance = distance[edge] + 1;
        if (tempDistance < distance[vertex]) {
          distance[vertex] = tempDistance;
          previous[vertex] = edge;
        }
      });
    });
    const path = this.getPath(previous, [xEnd, yEnd]);
    return path;
  }

  getPath(previous, end) {
    const path = [end];
    let lastOne = previous[end];
    while (lastOne) {
      path.push(lastOne);
      lastOne = previous[lastOne];
    }
    path.reverse().shift();
    return path;
  }
}
