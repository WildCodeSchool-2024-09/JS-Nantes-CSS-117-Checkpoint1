// changement avatar

const avatarSwitch = document.querySelector(".avatar");

avatarSwitch.addEventListener("click", () => {
  if (avatarSwitch.src = "/site/image/avatar-bis.png"){
avatarSwitch.src = "/site/image/avatar.svg"
} else {
  avatarSwitch.src = "/site/image/avatar-bis.png"
}
} ) ;

// changement nom et texte présentation 

const nameButton = document.querySelector(".button-name");
const yourName = document.querySelector(".firstname");
const pinkColor = document.querySelector(".pink-bg");
const pinkTxt = document.querySelectorAll(".pink-text");


nameButton.addEventListener("click", () => {
  const newName = prompt("What's your name ?");
  const recolor = prompt("choose a color");
  yourName.innerHTML = yourName.innerHTML.replace("Matt", newName); 

 pinkColor.style.backgroundColor = recolor;



 pinkTxt.forEach(function(element) {
  element.style.color = recolor;  
});
 //pinkTxt.style.color = recolor;

})

// const pinkTxt = document.querySelectorAll(".pink-text");

