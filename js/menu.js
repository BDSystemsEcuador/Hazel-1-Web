let btnMenu = document.querySelector('#menu');
let menu = document.getElementById('menu-show');
let btnPages=document.getElementById('btn-pages');

let menuPage = document.getElementById('menu-pages');
let activo =false;


    btnMenu.addEventListener("click",function(){
        if(activo==false){
            menu.classList.toggle('menu-mostrar');
            activo=true;
        }else{
            menu.classList.remove('menu-mostrar');
            menuPage.classList.remove('menu-show2');
            activo=false;
        }
    });
    btnPages.addEventListener("click",function(){
        menuPage.classList.toggle('menu-show2');
    });




