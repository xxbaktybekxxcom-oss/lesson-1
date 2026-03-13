const clicBtn = document.querySelector(".clik-btn")

console.log(clicBtn)

clicBtn.addEventListener("click", function()  { 
    document.querySelector(".title").textContent = "Hello baktybek"
})

const colorBtn = document.querySelector(".color-b tn")

console.log(colorBtn)

colorBtn.addEventListener("click",function () {
    document.querySelector(".color-title").textContent = "мой любимый цвет - белый " 
} )
