function _load () {

  //Mousemove event listener
  document.addEventListener("mousemove", parallax);

  //Swiper.js default
  let swiper = new Swiper('.swiper-container');

  //GSAP loading animation sequence
  let tl = gsap.timeline();

  tl.to(".a",{duration: 0.2, opacity: 1})
  .addLabel("first")
    .to(".b",{duration: 0.4, opacity: 1},"first")
    .to(".c",{duration: 0.4, opacity: 1},"first")
    .to(".d",{duration: 0.4, opacity: 1},"first")
    .addLabel("second")
    .to(".e",{duration: 0.3, opacity: 1},"second")
    .to(".f",{duration: 0.3, opacity: 1},"second")
    .to(".g",{duration: 0.2, opacity: 1})
    .to(".h",{duration: 0.2, opacity: 1})
    .to(".i",{duration: 0.2, opacity: 1})
    .to(".loading2",{duration: 1, transform: "scaleY(1)"})
    .to(".loadlogo",{duration: 1, opacity: 1})
    .addLabel("loadings")
    .to(".loading",{duration: 0.1, opacity: 0},"loadings")
    .to(".loading2",{duration: 1, opacity: 0},"loadings")
    .to(".loading",{display: "none"},"loadings")
    .to(".loading2",{display: "none"},"loadings")
};

//-----------------------------------
window.addEventListener("load", _load)
//-----------------------------------



//Parallax function
function parallax (e) {
  this.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

