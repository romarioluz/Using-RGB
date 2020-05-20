window.addEventListener('load',startColor)



function startColor(){

    var redBAr = document.querySelector("#redBar").value
    var greenBAr = document.querySelector("#greenBar").value
    var blueBAr = document.querySelector("#blueBar").value
    rgbColor = `rgb(${redBAr}, ${greenBAr}, ${blueBAr})`

    var red = document.querySelector("#red").value = redBAr
    var green = document.getElementById("green").value = greenBAr
    var blue = document.querySelector("#blue").value = blueBAr

    document.querySelector(".square"). style.backgroundColor = rgbColor
    
    console.log(red, green, blue)
}

document.querySelector("#redBar").addEventListener('input', startColor)
document.querySelector("#greenBar").addEventListener('input', startColor)
document.querySelector("#blueBar").addEventListener('input', startColor)





