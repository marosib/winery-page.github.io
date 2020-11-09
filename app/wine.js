function _load () {
    //GSAP scroll animation 
    let sa = gsap.timeline({paused: true});
    function wineSwipe () {
      sa.play()
      sa.addLabel("dis")
      .to(".wine", {duration: 0.5, opacity: 0, left: "-100%"},"dis")
      .to(".info h1",{duration: 0.2, opacity: 0, right: "-100%"},"dis")
      .to(".info h2",{duration: 0.2, opacity: 0, right: "-100%"},"dis")
      .to(".info h3",{duration: 0.2, opacity: 0, right: "-100%"},"dis")
      .to(".info p",{duration: 0.2, opacity: 0, right: "-100%"},"dis")
      basket.style.top = `-${place*100}%`;
      sa.addLabel("app")
      .to(".wine", {duration: 0.2, opacity: 1, left: 0},"app")
      .to(".info h1", {duration: 0.2, opacity: 1, right: 0},"app")
      .to(".info h2", {duration: 0.2, opacity: 1, right: 0},"app")
      .to(".info h3", {duration: 0.2, opacity: 1, right: 0},"app")
      .to(".info p", {duration: 0.2, opacity: 1, right: "-65%"},"app")
      //sa.pause()
    };
  
    //WINES scroll function
    const arr1 = document.querySelector('.arr1');
    const arr2 = document.querySelector('.arr2');
    const basket = document.querySelector('.basket')
    document.onwheel = wineScroll;
    let place = 0;
    let timer;
  
    function wineScroll (e) {
      if(timer) {
        window.clearTimeout(timer);
      }
    
      timer = window.setTimeout(
        function () {
          if (e.deltaY < 0) {
            if(place != 0) {
              place -= 1;
              wineSwipe();
              //basket.style.top = `-${place*100}%`;
            };
          } else if (e.deltaY > 0) {
            if (place != 4) {
              place += 1;
              wineSwipe();
              //basket.style.top = `-${place*100}%`;
            };
          };
          //scroll arrow appeare
          if (place === 0) {
            arr1.style.opacity = "0";
          } else {
            arr1.style.opacity = "1";
          }
          if (place === 4) {
            arr2.style.opacity = "0";
          } else {
            arr2.style.opacity = "1";
          }
      }, 120);
    };
//Loading animation
    let tl = gsap.timeline();

    tl.addLabel("load")
      .to(".loading3", {duration: 2, opacity: 0}, "load")
      .to(".loadlogo2", {duration: 2, opacity: 0}, "load")
      .to(".loading3", {display: "none"}, "load")
      .to(".loadlogo2", {display: "none"}, "load")
}

//-----------------------------------
window.addEventListener("load", _load)
//-----------------------------------
