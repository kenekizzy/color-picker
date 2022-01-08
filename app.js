const color = document.querySelector("#color")
const clickBtn = document.querySelector("#click-btn")
const body = document.querySelector("body")
const colors = ["red", "green", "blue", "aquamarine", "purple", "maroon", "brown", "purple", "violet"]

clickBtn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * 9)
    body.style.backgroundColor = colors[random]
    color.textContent = `Background Color: ${colors[random]}`
})