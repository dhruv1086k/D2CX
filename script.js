window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("navshow", window.scrollY > 50);
})
menu = document.getElementById("menu");
menu.onclick = function(){
    navbar = document.getElementsByClassName("navcenter")[0];
    navbar.classList.toggle("navcentershow");
}
