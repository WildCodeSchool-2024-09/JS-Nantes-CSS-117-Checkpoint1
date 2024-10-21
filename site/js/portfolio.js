// let image01 = document.getElementById("avatar");

function changeAvatar() {
  // console.log("test");
  image01 = document.getElementById("avatar").src = "image/avatar.svg";
}

let firstName = document.getElementById("firstname");

function clickModify() {
  let changeBackground = prompt("Quelle couleur voulez vous ?");

  let askName = prompt("Quel est ton nom aventurier ?");
  firstName.textContent = askName;
  firstName.style.color = "white";
}
