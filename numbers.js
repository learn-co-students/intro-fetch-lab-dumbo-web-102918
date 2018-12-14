// Write your numbers code in this file!
const btn1 = document.getElementById("number-one");
btn1.addEventListener("click", (e) => {
  fetch("http://numbersapi.com/1/trivia")
    .then(res => res.text())
    .then(txt => document.getElementById("one-facts").innerText = txt);
});

const txtInput = document.getElementById("pick-a-number");

txtInput.addEventListener("change", (e) => {
  if(isNaN(e.target.value)) {
    document.getElementById("random-math-fact").innerText = 'please enter a valid number'
  } else {
  fetch(`http://numbersapi.com/${e.target.value}/trivia`)
    .then(res => res.text())
    .then(txt => document.getElementById("random-math-fact").innerText = txt)
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  year = new Date().getFullYear();
  showYearFact(year);
  setInterval(() => {
    showYearFact(--year)}, 5000);
  });

function showYearFact(year){
  fetch(`http://numbersapi.com/${year}/year`)
    .then(res => res.text())
    .then(txt => document.getElementById("year-history").innerText = txt)
}

document.getElementById("all-numbers-button").addEventListener("click", (e) => {
  fetch("http://numbersapi.com/1..100")
    .then(res => res.json())
    .then((json) => {
      let html = '<ul>'
      for(const k in json) {
        html +=  `<li>${json[k]}</li>`
      }
      html += '</ul>';
      document.getElementById("all-the-numbers").innerHTML = html;
    });
});
