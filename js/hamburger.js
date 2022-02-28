
let hamburger = document.querySelector(".hamburger");
let navmenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", function(){
	hamburger.classList.toggle("active");
	navmenu.classList.toggle("active");
});
