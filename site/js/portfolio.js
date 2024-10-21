const changeimage = document.querySelector(".imghaut");

changeimage.addEventListener("click", () => {
	changeimage.src = "./image/avatar.svg";
});

const changeName = document.querySelector("button");
let result = "";
const textName = document.querySelector("#firstname");
const couleurFond = document.querySelector(".pink-bg");

changeName.addEventListener("click", () => {
	const changeUserName = prompt("Votre nom");
	textName.innerHTML = changeUserName;
	textName.style.color = "white";
	const changeCouleurFond = prompt("Enter a color");
	couleurFond.style.backgroundColor = changeCouleurFond;
});
