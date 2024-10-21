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
