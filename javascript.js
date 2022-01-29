const BtnChange = document.querySelector(".change");
const BtnReset = document.querySelector(".reset");
const body = document.querySelector("body");
const ColorText = document.querySelector("#Color");

const hexSource = [1,2,3,4,5,7,8,9,0,"a","b","c","d","d","f"]

const makingHex = function(){
let hexCode = "#";
for (let i = 0; i < 6; i++) {
 hexCode += hexSource[Math.trunc(Math.random()*hexSource.length)];
}
return hexCode;
}

BtnChange.addEventListener("click", function () {
body.style.backgroundColor=`${makingHex()}`
ColorText.textContent=`${makingHex()}`
});

BtnReset.addEventListener("click", function () {
body.style.backgroundColor="#F1F5F8";
ColorText.textContent=`#F1F5F8`
});


