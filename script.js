const color = document.querySelector("#color")
const clickBtn = document.querySelector("#click-btn")
const body = document.querySelector("body")

let hex = []

clickBtn.addEventListener("click", function(){
   
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16)
        if(random < 10){
            hex.push(random)
        }else if(random === 10){
            hex.push("a")
        }else if(random === 11){
            hex.push("b")
        }else if(random === 12){
            hex.push("c")
        }else if(random === 13){
            hex.push("d")
        }else if(random === 14){
            hex.push("e")
        }else{
            hex.push("f")
        }
    }
    
   body.style.backgroundColor = `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}${hex[4]}${hex[5]}`
   color.textContent = `Background Color: #${hex[0]}${hex[1]}${hex[2]}${hex[3]}${hex[4]}${hex[5]}`
   hex = []
})


