     //jquery for toggle dropdown menus
     $(document).ready(function(){
        //toggle sub menus
        $(".sub-btn").click(function(){
            $(this).next(".sub-menu").slideToggle();
        });

        //toggle more menus
        $(".more-btn").click(function(){
            $(this).next(".more-menu").slideToggle();
        });
    });

    //JS for responsive navigation
    let menu = document.querySelector(".menu");
    let menuBtn = document.querySelector(".menu-btn");
    let closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });
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