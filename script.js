const Supercontainer = document.querySelector(".Supercontainer");

for(let i=0;i<16;i++){
    let rowContainer = document.createElement("div");
    rowContainer.style.border = "thick solid #0000GG";
    rowContainer.classList.add("RowContainer");
    for(let i = 0;i<16;i++){
        let gridRow = document.createElement("div");
        
        gridRow.style.border="solid #0000FF";
        gridRow.style.width="25px";
        gridRow.style.height="26.5px";
        gridRow.classList.add("grid");
        rowContainer.appendChild(gridRow);
        Supercontainer.appendChild(rowContainer);
        gridRow.addEventListener('mouseover',changeColor);
    }
}
let GR = document.querySelectorAll(".grid");
console.log(GR);
let clearButton = document.querySelector("#clearer");
clearButton.addEventListener('click' , () => {
    GR.forEach((div) => div.style.backgroundColor = "white")
    console.log("in here")
})
function changeColor(e){
    e.target.style.backgroundColor="blue";
}