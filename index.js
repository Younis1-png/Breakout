const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

const blockWidth = 100;
const blockHeight = 50;

// create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.bottomTopLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

//all my blocks x and y axis. Ou class will take this and make sense of it
const blocks = [new Block(10, 270)];

console.log(blocks[0]);

// Draw all  block function
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();
