const imgAvatar = document.querySelector(".avatar");

let nameUser = document.querySelector("#firstname");

const buttonModifyer = document.querySelector(".button_modifyer");

const presentation = document.querySelector("#article_presentation");

let newName = ""
let newColor = ""

function changeAvatar() {
  imgAvatar.src = "/site/image/avatar-bis.png"
  console.log("coucou")
}

imgAvatar.addEventListener("click", changeAvatar);

function changeNameColor() {

  newName = prompt("Enter your name");
  nameUser.style.color = "white";
  nameUser.innerHTML = newName;
  newColor = prompt("Choose a color");
  console.log(newColor)
  presentation.style.backgroundColor = newColor;
  
};

buttonModifyer.addEventListener("click", changeNameColor);