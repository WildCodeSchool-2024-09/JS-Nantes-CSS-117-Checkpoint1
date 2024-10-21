//SWITCH AVATAR
const initialAvatar = document.querySelector(".initialAvatar");

const switchAvatar = (avatar) => {
  const currentSrc = avatar.getAttribute("src");
  const nextSrc = avatar.getAttribute("data-avatar");
  avatar.setAttribute("src", nextSrc);
  avatar.setAttribute("data-avatar", currentSrc);
};

initialAvatar.addEventListener("click", () => {
  switchAvatar(initialAvatar);
});

//CHANGE NAME, COLOR BACKGROUND AND ALL OTHERS ELEMENTS IN PINK
const firstName = document.querySelector("#firstname");
const changeNameButton = document.querySelector(".changeNameButton");
const pinkBackgrounds = document.querySelectorAll(".pink-bg");
const pinkTexts = document.querySelectorAll(".pink-text");
// const pinkElements = Array.from(pinkBackgrounds).concat(Array.from(pinkTexts));
// console.log({ pinkElements });

const changeNameAndColor = () => {
  let userColor = prompt("Enter a color : ");
  pinkBackgrounds.forEach((element) => {
    element.style.background = userColor;
  });
  pinkTexts.forEach((element) => {
    element.style.color = userColor;
  });
  let userName = prompt("Enter your name : ");
  firstName.textContent = userName;
  firstName.style.color = "var(--light)";
};

changeNameButton.addEventListener("click", changeNameAndColor);
