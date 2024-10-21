const newPicture = document.getElementById('avatar');

newPicture.addEventListener('click', () => {
  newPicture.src = "image/avatar.svg"
});

const buttonChangeProfil = document.getElementById('change-user');
const nameField = document.getElementById('firstname');
const backgroundBanner=document.getElementById('background-banner');
const textAreas = document.getElementsByTagName("h4");
const niceButtons = document.querySelectorAll('.nice-buttons');
const backgroundBottom=document.getElementById('bottom-background')

console.log(textAreas.length);
console.log(textAreas)
console.log(niceButtons)
console.log(backgroundBanner)

buttonChangeProfil.addEventListener('click', () => {
  const backgroundColor=prompt('Veuillez choisir la couleur du fond')
  const newUserName = prompt('Vueillez saisir votre nom');
  backgroundBanner.style.backgroundColor = backgroundColor;
  buttonChangeProfil.style.backgroundColor = backgroundColor;
  backgroundBottom.style.backgroundColor = backgroundColor;
  
  nameField.textContent=newUserName;
  nameField.style.color="white";
  for (let i = 0; i < textAreas.length; i++) {
    textAreas[i].style.color=backgroundColor;
  }

  for (let i = 0; i < niceButtons.length; i++) {
    niceButtons[i].style.backgroundColor=backgroundColor;
  }
  
  
  
})