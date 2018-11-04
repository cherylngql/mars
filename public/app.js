const xhr = new XMLHttpRequest();

function getBotData() {
  const url = '//headlight-tournament-3.herokuapp.com/bots';
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      bots = xhr.response.Bots
    }
  }
}

function getNodeData() {
  const url = '//headlight-tournament-3.herokuapp.com/nodes';
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      nodes = xhr.response.Nodes
    }
  }
}

let bots;
let nodes;

setInterval(async () => {
  getNodeData();
  setTimeout(getBotData, 100);
},1000);
