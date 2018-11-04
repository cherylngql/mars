const height = 20;
const width = 20;

const board = []

const table = document.createElement("tbody");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  const tds = [];
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    tds.push(td)
  }
  table.appendChild(tr);
  board.push(tds)
}

document.getElementById("board").append(table)

function update(bots) {
  const prevBots = Array.from(document.getElementsByClassName('bot'));
  console.log(prevBots)
  for (let i = 0; i < prevBots.length; i++) {
    prevBots[i].classList.remove('bot')
  }

  for (let i = 0; i < bots.length; i++) {
    const x = bots[i].Location.X;
    const y = bots[i].Location.Y;
    board[x][y].classList.add('bot')
  }
}


setInterval(() => {update(bots)}, 2000)