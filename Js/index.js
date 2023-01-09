const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let nav = document.getElementById("nav-list")

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

  }))

  // night/day mode toggle function referrenced from W-3 schools
  function myFunction() {
    let viewMode = document.body
    viewMode.classList.toggle("day-mode");
    
 }

 function moon(x) {
  x.classList.toggle("fa-moon-o");
}




