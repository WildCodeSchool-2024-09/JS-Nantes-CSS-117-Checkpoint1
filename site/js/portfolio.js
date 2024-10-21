// changement avatar

let avatarSwitch = document.querySelector(".avatar");
const avatarBase = "avatar-bis.png";
const newAvatar = "avatar.svg";




avatarSwitch.addEventListener("click", () => {
  if (avatarSwitch.src.endsWith(avatarBase)){
avatarSwitch.src = "/site/image/"+ newAvatar;
} else {
  avatarSwitch.src = "/site/image/" + avatarBase;
}
} ) ;

// changement nom et texte présentation 

const nameButton = document.querySelector(".button-name");
const yourName = document.querySelector(".firstname");
const pinkColor = document.querySelectorAll(".pink-bg");
const pinkTxt = document.querySelectorAll(".pink-text");

let oldName = "Matt";

nameButton.addEventListener("click", () => {
 
  const newName = prompt("What's your name ?");
  const recolor = prompt("choose a color");
  yourName.innerHTML = yourName.innerHTML.replace(oldName, newName); 


 pinkColor.forEach(function(element) {
  element.style.backgroundColor = recolor;  
});
 



 pinkTxt.forEach(function(element) {
  element.style.color = recolor;  
});

oldName = newName;

})



