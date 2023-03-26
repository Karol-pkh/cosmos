let body = document.querySelector(".body");
let buttonElement = document.querySelector(".js-button");
let themeName = document.querySelector(".themeName");
let tableSection = document.querySelector(".tableSection");
let sectionToHidden = document.querySelector(".sectionToHidden");
let button2Element = document.querySelector(".js-button2");

buttonElement.addEventListener("click", () => {
  body.classList.toggle("dark");
  tableSection.classList.toggle("dark");
  themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

button2Element.addEventListener("click", () => {
  sectionToHidden.hidden = !sectionToHidden.hidden;
  button2Element.innerText = sectionToHidden.hidden
    ? "Pokaż planety"
    : "Schowaj planety";
});
