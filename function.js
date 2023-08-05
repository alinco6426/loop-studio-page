let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let listContainer = document.getElementById("list-container");

openBtn.addEventListener("click",function() {
    listContainer.style.display = "block";
})

closeBtn.addEventListener("click",function () {
    listContainer.style.display = "none";
    listContainer.classList.remove("display");
})