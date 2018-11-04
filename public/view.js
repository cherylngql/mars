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

function displayBot(bot) {
  const selectedBotLeft = document.querySelector('#selected-bot .left');
  const selectedBotRight = document.querySelector('#selected-bot .right');
  const keys = 
  `
  <p>Bot ID :</p>
  <p>Location :</p>
  <p>Score :</p>
  <p>Claimes :</p>
  `;
  selectedBotLeft.innerHTML = keys;
  const values = 
  `
  <p>${bot.Id}</p>
  <p>(${bot.Location.X},${bot.Location.Y})</p>
  <p>${bot.Score}</p>
  <p>${bot.Claims ? 'None' : bot.Claims.join(', ')}</p>
  `;
  selectedBotRight.innerHTML = values;
}

function displayNode(node) {
  const selectedNodeLeft = document.querySelector('#selected-node .left');
  const selectedNodeRight = document.querySelector('#selected-node .right');
  const keys = 
  `
  <p>Node ID :</p>
  <p>Location :</p>
  <p>Value :</p>
  <p>Claimer :</p>
  `;
  selectedNodeLeft.innerHTML = keys;
  const values = 
  `
  <p>${node.Id}</p>
  <p>(${node.Location.X},${node.Location.Y})</p>
  <p>${node.Value}</p>
  <p>${node.ClaimedBy}</p>
  `;
  selectedNodeRight.innerHTML = values;
}

function onClick(event) {
  document.getElementById('click').style.display = 'none';
  if (event.target.bot && event.target.node) {
    const bot = event.target.bot;
    const node = event.target.node;
    displayBot(bot)
    displayNode(node)
  } else if (event.target.bot) {
    const bot = event.target.bot;
    displayBot(bot)
  } else {
    const node = event.target.node;
    displayNode(node)
  }
}

function update() {
  const boardDiv = document.getElementById('board');
  const prevBots = Array.from(boardDiv.getElementsByClassName('bot'));
  const prevNodes = Array.from(boardDiv.getElementsByClassName('node'));

  for (let i = 0; i < prevBots.length; i++) {
    prevBots[i].classList.remove('bot')
    prevBots[i].bot = undefined
    prevBots[i].removeEventListener('click', onClick)
  }
  for (let i = 0; i < prevNodes.length; i++) {
    prevNodes[i].classList.remove('node')
    prevNodes[i].removeEventListener('click', onClick)
  }

  for (let i = 0; i < bots.length; i++) {
    const x = bots[i].Location.X;
    const y = bots[i].Location.Y;
    board[x][y].classList.add('bot');
    board[x][y].bot = bots[i];
    board[x][y].addEventListener('click', onClick)
  }

  for (let i = 0; i < nodes.length; i++) {
    const x = nodes[i].Location.X;
    const y = nodes[i].Location.Y;
    board[x][y].classList.add('node')
    board[x][y].node = nodes[i]
    board[x][y].addEventListener('click', onClick)
  }
}

setInterval(update, 2000)
