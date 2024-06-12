const icon = document.querySelector(".fa-solid");
const nav = document.querySelector("nav");
const header = document.querySelector("#home");
console.log(header);
icon.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    nav.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    nav.style.display = "none";
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  }
});
