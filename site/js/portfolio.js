const avatar = document.querySelector(".avatar");
const changeName = document.querySelector(".changeName");
const firstName = document.querySelector("#firstname");
const colorChange = document.querySelector(".pink-bg");
const colorFooter = document.querySelector("footer");
const colorText = document.querySelectorAll(".pink-text");
const colorMenu = document.querySelectorAll(".navbar");
const modButton = document.querySelector(".modifier");
const devTools = ["VSCode", "Github", "Terminal"];
const modTools = document.querySelectorAll("#front-dev-tools>li");
let contenuNouvelleListe = "";
console.log(modButton);
console.log(modTools);

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

changeName.addEventListener("click", () => {
  let newColor = prompt("Enter a color");
  let newName = prompt("Enter your name");
  firstName.innerHTML = newName;
  firstName.style.color = "white";
  colorChange.style.backgroundColor = `${newColor}`;
  colorFooter.style.backgroundColor = `${newColor}`;
  colorText.forEach((text) => {
    text.style.color = `${newColor}`;
  });
  colorMenu.forEach((links) => {
    links.style.color = `${newColor}`;
  });
});
