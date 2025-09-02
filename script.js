let btn_1 = document.querySelector("#btn_1");
let btn_2 = document.querySelector("#btn_2");
let btn_3 = document.querySelector("#btn_3");
let btn_4 = document.querySelector("#btn_4");
let img_1 = document.querySelector("#img_1");
let img_2 = document.querySelector("#img_2");
let img_3 = document.querySelector("#img_3");
let img_4 = document.querySelector("#img_4");
function color_slider() {
     btn_1.addEventListener("click", () => {
          img_1.style.display = "block";
          img_2.style.display = "none";
          img_3.style.display = "none";
          img_4.style.display = "none";
     })
     btn_2.addEventListener("click", () => {
          img_1.style.display = "none";
          img_2.style.display = "block";
          img_3.style.display = "none";
          img_4.style.display = "none";
     })
     btn_3.addEventListener("click", () => {
          img_1.style.display = "none";
          img_2.style.display = "none";
          img_3.style.display = "block";
          img_4.style.display = "none";
     })
     btn_4.addEventListener("click", () => {
          img_1.style.display = "none";
          img_2.style.display = "none";
          img_3.style.display = "none";
          img_4.style.display = "block";
     })
}
color_slider();
let menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
     let ul = document.querySelector("ul");
     let cart = document.querySelector("cart");
     let search = document.querySelector("search");
     ul.classList.toggle("ul-block");
     cart.classList.toggle("cart");
     search.classList.toggle("search");
})