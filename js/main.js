let header = document.querySelector('header');
let menu  = document.querySelectorAll('nav');
let toggle  = document.querySelectorAll('.toggle');
let nav = document.querySelector('#navbarSupportedContent')
let toggler = document.querySelector('.navbar-toggler')
window.onscroll = function () {

let top = window.scrollY;
if (top >= header.offsetHeight) {
    menu.forEach(item => {
        item.classList.add('header-scroll');
        nav.style.top = "50px" 
           
    });
}else {
    menu.forEach(item => {
        item.classList.remove('header-scroll'); 
        nav.style.top = "" 
  
    });}
}

toggle.forEach(element => {
    element.onclick =function(){
       nav.classList.remove("show")
      }  
});




