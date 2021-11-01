let menu = document.getElementById('menu');
let menuBtn = document.getElementById("menu-btn")

let menuOpen = false;
menuBtn.addEventListener("click" , function(){
    if(menuOpen === false){
        menu.style.right="0%";
        menuOpen = true;
        menuBtn.innerHTML = `<i class="bi bi-x-square"></i>`
    }
    else if(menuOpen === true){
        menu.style.right="-70%";
        menuOpen=false;
        menuBtn.innerHTML = `<i class="bi bi-list"></i>`;
    }
})
alert("hello")
