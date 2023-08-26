var colors = [
    "#0074D9",
    "#FF851B",
    "#FF2693",
    "#A4BEEA",
    "#FDBCB4",
    "#FEDEAF",
    "#FFFFFF",
    "#000000",
    "#c0c0c0",
    "#808080",
    "#ff0000",
    "#808000",
    "#0000ff",

]

const button = document.querySelector("#button")

button.addEventListener("click", ()=>{
    const randomColors = colors[Math.floor(Math.random()*colors.length)]
    document.getElementsByTagName("body")[0].style.backgroundColor = randomColors
})

