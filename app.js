const colors = [
  "green",
  "red",
  "deepskyblue",
  "tomato",
  "yellow",
  "blue",
  "orange",
  "gray",
  "cyan",
  "purple",
];

colors.forEach((color) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = color;
  btn.setAttribute("data-color", color);
  document.querySelector(".colors").appendChild(btn);
  btn.onclick = () => {
    setColor(color);
  };

  document.body.onload = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    const color = colors[randomColor];
    setColor(color);
  };
});

function setColor(color) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("#current-color").textContent = color;
  const btnActive = document.querySelector("button.active");
  if (btnActive !== null) {
    btnActive.classList.remove("active");
  }
  document.querySelector(`button[data-color=${color}]`).classList.add("active");
}
