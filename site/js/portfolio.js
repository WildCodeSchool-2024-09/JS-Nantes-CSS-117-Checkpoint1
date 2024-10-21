const avatarElement = document.getElementById("avatar");

// step 1

const avatar1 = "/site/image/avatar-bis.png";
const avatar2 = "/site/image/avatar.svg";

avatarElement.addEventListener("click", function () {
  if (avatarElement.src === avatar1) {
    console.log("change 2")
    avatarElement.src = avatar2
  }
  else if (avatarElement.src === avatar2) {
    console.log("change 1")
    avatarElement.src = avatar1
  }
  else {
    console.log("else statement")
    avatarElement.src = avatar1
  }

})

// button

const changeButton = document.getElementById("change-name");
const userDisplay = document.getElementById("firstname")
const textBackground = document.querySelector(".pink-bg")
const pinkText = document.querySelector(".pink-text")

changeButton.addEventListener("click", function () {
  userName = prompt("what's your name?")
  userDisplay.innerHTML = userName
  userDisplay.style.color = "white"
  const newColor = prompt("Enter a color")
  textBackground.style.cssText = `--lightWildColor: ${newColor}`
  pinkText.style.cssText = `--lightWildColor: ${newColor}`  

})



