const modes = document.querySelector(".toggle-content");
const toggleText = document.querySelector(".toggle-text");
const mainbody = document.querySelector("#home-page");

const modeOperation = () => {
  if (toggleText.innerText == "Light") {
    toggleText.innerText = "Dark";
    document.body.style.backgroundColor = " #5f8db7";
    return;
  }
  if (toggleText.innerText == "Dark") {
    toggleText.innerText = "Light";
    document.body.style.backgroundColor = " #273746";
  } else {
    document.body.style.backgroundColor = " #273746";
  }
};
modes.addEventListener("click", modeOperation);
