const xhr = new XMLHttpRequest();
const url = 'https://headlight-tournament-1.herokuapp.com';
xhr.open("GET", url);
xhr.send();
xhr.onreadystatechange=(e)=>{
console.log(xhr.responseText)
}
