const profileIMG = document.getElementById("LogoDeProfile");

let avatar = false;

profileIMG.addEventListener("click", function () {
  if (avatar === false) {
    profileIMG.src = "/site/image/avatar.svg";
    avatar = true;
  } else if (avatar === true) {
    profileIMG.src = "/site/image/avatar-bis.png";
    avatar = false;
  }
});

const input1 = document.getElementById("input1");
const firstname = document.getElementById("firstname");
const backgroundBG = document.getElementById("description-bg");

input1.addEventListener("click", function () {
  let hisName = prompt("Enter your name");
  firstname.textContent = hisName;
  let hisName2 = prompt(
    "Enter the color you want for your name like purple, red, white, ..."
  );
  firstname.style.color = hisName2;
  let bg2 = prompt(
    "Enter The background color you want like purple, red, white, ..."
  );
  backgroundBG.style.backgroundColor = bg2;

  // if (bg2) {
  //   document.documentElement.style.setProperty("--purple", bg2);
  // }
});
