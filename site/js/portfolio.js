const imgAvatar = document.querySelector(".avatar");

let nameUser = document.querySelector("#firstname");

const buttonModifyer = document.querySelector(".button_modifyer");

let newName = ""

function changeAvatar() {
  imgAvatar.src = "/site/image/avatar-bis.png"
  console.log("coucou")
}

imgAvatar.addEventListener("click", changeAvatar);

function changeNameColor() {

  newName = prompt("Enter your name");
  nameUser.style.color = "white";
  nameUser.innerHTML = newName;
  
};

buttonModifyer.addEventListener("click", changeNameColor);