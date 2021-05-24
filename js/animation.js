const tl = gsap.timeline({ paused: true });
tl.fromTo(".bar, .bar1", { width: "0%"}, {width:"70%"});
tl.to(".bar2, .bar3", { width: "60%"}, "-=0.5");
tl.to(".bar4", {width:"45%"}, "-=0.5")
tl.to(".bar5, .bar6", {width:"40%"}, "-=0.5")
tl.to(".bar7", {width:"35%"}, "-=0.5")

window.addEventListener("scroll", () => {
    Toggletl(tl)

})

let skills = document.querySelector('.skills')

function Toggletl(tween) {
    let windowtop = window.scrollY;

    if (windowtop >= skills.offsetHeight-300) {
        setTimeout(()=>{
            console.log(skills.offsetHeight-300)

            tween.play() 
        }, 2000)

    }
}


$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 3000;
function hidePreloader() {
var preloader = $('#preloader');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
