const BtnChange = document.querySelector(".change");
const BtnReset = document.querySelector(".reset");
const body = document.querySelector("body");
const ColorText = document.querySelector("#Color");

const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Green", hex: "#00FF00" },
];

BtnChange.addEventListener("click", function () {
  const num = Math.trunc(Math.random() * 5);
  body.style.backgroundColor = `${colors[num].hex}`;
});
