const First = document.querySelector(".Enclose>h1")
const para = document.querySelector(".Enclose>p")
const btn = document.querySelector(".btn_img")

window.onload = theData();

btn.addEventListener("click", function(){
    theData()
})

async function theData(){
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json()
    First.innerText = `ADVICE #${data.slip.id}`;
    para.innerText = `${data.slip.advice}`
}