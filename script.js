let amtbox= document.querySelector("input")
let btn= document.querySelector("button")
let tip= document.querySelector(".output")

btn.addEventListener("click", caltip)
function caltip(){
    let amt= amtbox.value
    console.log(amt);

    let tipamt= amt*5/100;
    tip.innerHTML = `tip is: ${tipamt}`
}