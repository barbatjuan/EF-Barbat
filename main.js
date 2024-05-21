const nav = document.querySelector("#navMenu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");


openBtn.addEventListener("click", () => {
    navMenu.classList.add("visible");
})

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("visible");
})