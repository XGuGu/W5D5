const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[3, 1], [2], []];
  }

  promptMove() {
    this.render(this.towers);
    reader.question("Which tower do you want to move from?", (res1) => {
      reader.question("Which tower do you want to move to?", (res2) => {
        let num1 = parseInt(res1);
        let num2 = parseInt(res2);
        if (this.isValidMove(num1, num2)) {
          this.move(num1, num2);
          this.render(this.towers);
        } else {
          console.log('invalid move');
        }
      });
    });
  }

  move(from, to) {
    // console.log(res1, res2);
    let temp = this.towers[from].pop();
    this.towers[to].push(temp);
  }

  render(tower) {
    for (var i = 0; i < tower.length; i++) {
      for (var j = 0; j < tower[i].length; j++) {
        console.log(tower[i][j]  );
      }
      console.log('\n');
    }
  }

  isValidMove(from, to) {
    if (from === to) {
      return false;
    }

    if (this.towers[from].length === 0) {
      return false;
    }

    if (this.towers[to].length === 0) {
      return true;
    }

    if (this.towers[from][(this.towers[from].length - 1)] > this.towers[to][(this.towers[to].length - 1)]) {
      return false;
    }
    // if (this.towers[from].slice(-1)[0] > this.towers[to].slice(-1)[0] ) {
    //   return false;
    // }
    return true;
  }
}

let game = new Game();
game.promptMove();
