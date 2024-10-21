let avatar = document.querySelector(".avatar-img");

avatar.addEventListener("click", function () {
  let newImgSrc = prompt("Url de la nouvelle image :");
  if (newImgSrc) {
    avatar.src = newImgSrc;
  }
});

let backgroundColor = document.querySelector(".pink-bg");
let textColor = document.querySelector(".pink-text");

let modifyBtn = document.querySelector(".modify-btn");
let firstName = document.querySelector("#firstname");

modifyBtn.addEventListener("click", function () {
  let newColor = prompt("Quelle couleur voulez vous :");
  if (newColor) {
    backgroundColor.style.backgroundColor = newColor;
    textColor.style.color = newColor;
  }

  let newName = prompt("Choisissez votre nouveau nom :");
  if (newName) {
    firstName.textContent = newName;
    firstName.style.color = "white";
  }
});
