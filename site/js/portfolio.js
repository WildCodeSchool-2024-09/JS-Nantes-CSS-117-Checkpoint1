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

//CHANGE NAME, COLOR BACKGROUND, TEXTS IN PINK , AND LINKS COLOR
const firstName = document.querySelector("#firstname");
const changeNameButton = document.querySelector(".changeNameButton");
const pinkBackgrounds = document.querySelectorAll(".pink-bg");
const pinkTexts = document.querySelectorAll(".pink-text");
const bannerLinks = document.querySelectorAll(".menu a");
console.log({ bannerLinks });
const changeNameAndColor = () => {
  let userColor = prompt("Enter a color : ");
  pinkBackgrounds.forEach((element) => {
    element.style.background = userColor;
  });
  pinkTexts.forEach((element) => {
    element.style.color = userColor;
  });
  bannerLinks.forEach((link) => {
    link.style.color = userColor;
  });
  let userName = prompt("Enter your name : ");
  firstName.textContent = userName;
  firstName.style.color = "var(--light)";
};

changeNameButton.addEventListener("click", changeNameAndColor);

//MODIFY SKILLS
const skills = document.querySelectorAll("li[data-skill]");
const skillsModifyButton = document.querySelector(".skillsModifyButton");

skillsModifyButton.addEventListener("click", () => {
  skills.forEach((skill) => {
    skill.textContent = skill.dataset.skill;
  });
});
