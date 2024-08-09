const divImg = document.getElementById("img");
const icon = document.querySelector(".material-symbols-outlined");
const odinPElement = document.getElementById("odin-p");
const photoLinkPElement = document.getElementById("photoLink-p");

const pass = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// When an input is focused, show password, else hide it...

pass.addEventListener("focus", () => {
  pass.setAttribute("type", "text");
});

pass.addEventListener("focusout", () => {
  pass.setAttribute("type", "password");
});

/////////////////////////////////////////////////

confirmPassword.addEventListener("focus", () => {
  confirmPassword.setAttribute("type", "text");
});

confirmPassword.addEventListener("focusout", () => {
  confirmPassword.setAttribute("type", "password");
});

////////////////////////////////////////////////////

icon.addEventListener("click", () => {
  icon.classList.toggle("icon-active");
  divImg.classList.toggle("active");
  odinPElement.classList.toggle("odin-p-active");
  photoLinkPElement.classList.toggle("photo-link-p-active");
});
