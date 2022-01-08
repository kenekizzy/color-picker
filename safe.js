const color = document.querySelector("#color")
const clickBtn = document.querySelector("#click-btn")
const body = document.querySelector("body")

let rgb = []

clickBtn.addEventListener("click", function(){
   for(let i = 0; i < 3; i++){
    let random = Math.floor(Math.random() * 256)
    rgb.push(random)
   }

   body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
   color.textContent = `Background Color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
   rgb = []


})