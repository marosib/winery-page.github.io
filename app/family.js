function _load () { 
  ScrollOut({
    targets: "section"
  });

  let tl = gsap.timeline();

  tl.addLabel("load")
    .to(".loading3", {duration: 2, opacity: 0}, "load")
    .to(".loadlogo2", {duration: 2, opacity: 0}, "load")
    .to(".loading3", {display: "none"}, "load")
    .to(".loadlogo2", {display: "none"}, "load")
    .to(".family-center", {height: "unset"})
};

window.addEventListener("load", _load)
