window.addEventListener('scroll',()=>{
    let animacion = document.getElementById('animacion');
    let animacion2 = document.getElementById('animacion2');
    let animacion3 = document.getElementById('animacion3');
    let posicionObj1=animacion.getBoundingClientRect().top;
    let posicionObj2=animacion2.getBoundingClientRect().top;
    let posicionObj3=animacion3.getBoundingClientRect().top;
    let tamañoPantalla=window.innerHeight;
    let headertxt=document.getElementById('header-txt');
    let navColor=document.getElementById('nav-color');
    let links=document.getElementsByClassName('menu__link');
    let logo=document.getElementById('logo');
    
    console.log(links);
    if(headertxt.getBoundingClientRect().top<60.5){
        navColor.classList.add('nav-color-apply');
        for(let i = 0;i<links.length;i++){
            links[i].classList.add('nav-show-apply');
        }
        logo.setAttribute('src','img/logo_light.png');
        document.getElementById('menu').style.color="white";
    }else{
        navColor.classList.remove('nav-color-apply');
        for(let i = 0;i<links.length;i++){
            links[i].classList.remove('nav-show-apply');
        }
        logo.setAttribute('src','img/logo_dark-2.png');
        document.getElementById('menu').style.color="";
    }
    if(posicionObj1<tamañoPantalla){
        animacion.style.animation='mover 1s ease-out';
    }
    if(posicionObj2<tamañoPantalla){
        animacion2.style.animation='mover 1s ease-out';
    }
    if(posicionObj3<tamañoPantalla){
        animacion3.style.animation='mover 1s ease-out';
    }
});