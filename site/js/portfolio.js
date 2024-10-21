const imgAvatar = document.querySelector(".avatar");

function changeAvatar() {
  imgAvatar.src = "/site/image/avatar-bis.png"
  console.log("coucou")
}

imgAvatar.addEventListener("click", changeAvatar)