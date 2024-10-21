// step 1
const newPicture = document.getElementById('avatar');
newPicture.addEventListener('click', () => {
  newPicture.src = "image/avatar.svg"
});

// To add fields into the skill list - bonus step 8
const incrementList = document.getElementById("increment-list");
const addButton = document.getElementById("add-button");
const newText = document.getElementById('new-text');

addButton.addEventListener("click", () => {
  console.log(newText.value);
  const newEntry = document.createElement("li");
  newEntry.innerHTML = newText.value;
  incrementList.appendChild(newEntry);
  newText.value="";
});

// Change the skill list in dev front - Bonus step 7
const listToModify = document.getElementById("front-dev-tools")
const buttonModify = document.getElementById("selection-button");
const list1 = document.getElementById("li-1");
const list2 = document.getElementById("li-2");
const list3 = document.getElementById("li-3");

buttonModify.addEventListener("click", () => {
  list1.textContent="";
  list1.textContent="VSCode"
  list2.textContent="";
  list2.textContent="GitHub"
  list3.textContent="";
  list3.textContent="Terminal"
})

// Change color, background color and content of User Name by clicking on a button
// Allow entries for the user choice - step 2 to 5
const buttonChangeProfil = document.getElementById('change-user');
const nameField = document.getElementById('firstname');
const backgroundBanner=document.getElementById('background-banner');
const textAreas = document.getElementsByTagName("h4");
const niceButtons = document.querySelectorAll('.nice-buttons');
const backgroundBottom=document.getElementById('bottom-background')
const links = document.querySelectorAll(".link")

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
  
  for (let i = 0; links.length; i++) {

    links[i].style.color = backgroundColor;
  }
  
})

