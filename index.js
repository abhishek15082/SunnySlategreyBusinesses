const modechange = document.querySelector("#modechange-logo");
const innerValue = document.querySelector("#mode-para");
const home = document.querySelector(".home-page");
const modeChange = () => {
  console.log(innerValue.innerHTML);
  if (innerValue.innerHTML == "Light") {
    innerValue.innerHTML = "Dark";
    home.style.color = "green";
  }
};

modechange.addEventListener("click", modeChange);
