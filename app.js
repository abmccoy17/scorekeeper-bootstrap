const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const playingToSelector = document.querySelector('#playingTo');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#resetBtn');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', function() {
    if (p1Score !== winningScore) {
        p1Score += 1;
        p1Display.innerText = `${p1Score} `;} 
    if (p1Score === winningScore) {
        isGameOver = true;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Display.classList.add("text-success");
        p2Display.classList.add("text-danger");
    }
});

p2Btn.addEventListener('click', function () {
    if (p2Score !== winningScore) {
      p2Score += 1;
      p2Display.innerText = `${p2Score} `;}
    if (p2Score === winningScore) {
      isGameOver = true;
      p1Btn.disabled = true;
      p2Btn.disabled = true;
      p2Display.classList.add("text-success");
      p1Display.classList.add("text-danger");
    }
});

resetBtn.addEventListener('click', function() {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = `${p1Score} `;
    p2Display.innerText = `${p2Score} `;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Display.classList.remove("text-success", "text-danger");
    p2Display.classList.remove("text-danger", "text-success");
});

playingToSelector.addEventListener('change', function() {
    const scoreNum = parseInt(this.value);
    winningScore = scoreNum;
});

