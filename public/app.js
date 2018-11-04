const xhr = new XMLHttpRequest();

function getData() {
  const boturl = '//headlight-tournament-1.herokuapp.com/bots';
  const nodeurl = '//headlight-tournament-1.herokuapp.com/nodes';
  xhr.open("GET", boturl);
  xhr.responseType = "json";
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      bots = xhr.response.Bots
    }
  }
  // xhr.open("GET", nodeurl);
  // xhr.responseType = "json";
  // xhr.send();
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     nodes = xhr.response.Nodes
  //   }
  // }

}

let bots;
let nodes;
// Sample request

// let getBots = function(response) {
  // const body = document.getElementsByTagName('BODY')[0];
  // bots = response.Bots;
  // for (let i = 0; i < bots.length; i++) {
  //   let botDiv = document.createElement('div');
  //   let bot = bots[i]
  //   let markup = `
  //     <h3>id: ${bot.Id}</h3>
  //     <p>location: (${bot.Location.X},${bot.Location.Y})</p>
  //     <p>score: ${bot.Score}</p>
  //   `
  //   botDiv.innerHTML = markup
  //   body.appendChild(botDiv);
  // }
// }

// let getNodes = function(response) {
//   nodes = response.Nodes;
// }
setInterval(getData,1000);
// sendGETRequest("/nodes", getNodes);
