function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg" 
    }else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/images/close_white_36dp.svg" 
    }
}
/* menu responsivo */
/* carrosel */


/* favoritar */
let count = Number(localStorage.getItem('count')) || 0;
document.getElementById("countDisplay").innerHTML = `Corações: ${count}`;

function heart() {
  count++;
  localStorage.setItem('count', count);
  document.getElementById("countDisplay").innerHTML =  count;
}