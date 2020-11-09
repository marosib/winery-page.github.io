function _load () {
  //Navbar and hamburger selector
  let hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", navOpen);
  let nav = document.getElementById("nav");
  
};

//-----------------------------------
window.addEventListener("load", _load)
//-----------------------------------

//Navbar and hamburger open function
  function navOpen () {
    hamburger.classList.toggle("hamburger-open")
    nav.classList.toggle("nav-open")
  }