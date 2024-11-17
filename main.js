const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector("header nav");
menuBtn.addEventListener("click",() => {
    navbar.classList.toggle("active");
});