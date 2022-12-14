/*Abre e fecha menu lateral em modo mobile*/
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', ()=> {
    /*Se não for bi list é X altera no html*/
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    /*Chama menu e trava scroll*/
    body.classList.toggle("menu-nav-active")
})

/*Fechar menu quando clicar em algum item e muda o icone para list*/
const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener('click', () => {
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

/*Animar atribuitos anim*/
const item = document.querySelectorAll("[data-anim]");
const animScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) =>{
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else{
            element.classList.remove("animate");
        }
    });
}
animScroll()

window.addEventListener("scroll", ()=> {
    animScroll();
})

/*Texto effect escrever*/
var typed = new Typed("#subtitle",{
    strings: ["WebDeveloper GameDeveloper"], 
    typeSpeed:100, 
    backSpeed:30,
    loop:false,
    showCursor: false
})