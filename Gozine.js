const buttons = document.querySelectorAll(".button1w");
const pannels = document.querySelectorAll(".up");
for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  const pannel = pannels[i];
  button.addEventListener("click", function () {
    button.classList.toggle("active");
    if (pannel.style.maxHeight) {
      console.log("if");
      pannel.style.maxHeight = null;
    } else {
      pannel.style.maxHeight = pannel.scrollHeight + "px";
    }
  });
}
