const img = document.querySelector("main > img");
img.addEventListener("click", () => {
  img.src = "./image/avatar-bis.png";
});
const button = document.querySelector(".description > button");
button.addEventListener("click", () => {
  const nextName = prompt("Enter your name");
  const name = document.querySelector("#firstname");
  name.style.color = "white";
  name.innerHTML = nextName;
  const background = document.querySelector(".description");
  background.style.backgroundColor = "#750ff7";
  document.documentElement.style.setProperty("--lightWildColor", "#750ff7");
  const links = document.querySelectorAll(".menu > li > a");
  links.forEach((link) => {
    link.style.color = "#750ff7";
  });
});
const modifyButton = document.querySelector(".column > button");
modifyButton.addEventListener("click", () => {
  let tab = ["VScode", "Github", "Terminal"];
  const list = document.querySelectorAll("#front-dev-tools > li");
  for (let x = 0; x < list.length; x++) list[x].innerHTML = tab[x];
});
const addDevTool = document.querySelector("#addDevTool");
addDevTool.addEventListener("click", () => {
  newDevTool = document.createElement("li");
  const newDevToolValue = document.querySelector("#newDevTool").value;
  newDevTool.innerHTML = newDevToolValue;
  const devToolParent = document.querySelector(".column > ul");
  devToolParent.appendChild(newDevTool);
});
