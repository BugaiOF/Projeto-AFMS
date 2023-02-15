
/* favoritar */
let count = Number(localStorage.getItem('count')) || 0;
document.getElementById("countDisplay").innerHTML = `Corações: ${count}`;

function heart() {
  count++;
  localStorage.setItem('count', count);
  document.getElementById("countDisplay").innerHTML =  count;
}