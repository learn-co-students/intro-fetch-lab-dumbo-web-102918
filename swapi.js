// Write your swapi code in this file!
let btn = document.getElementById('crawlBtn')
btn.addEventListener("click", getOpeningCrawl);

function getOpeningCrawl(e) {
  fetch("https://swapi.co/api/films/4/")
    .then(res => res.json())
    .then(json => document.getElementById("crawlDiv").innerText = json.opening_crawl);
}
