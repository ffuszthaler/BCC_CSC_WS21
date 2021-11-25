// images names
const imageNames = ["start", "car", "mountains", "stars", "sunset", "water"];

// reference to html elements
const displayedImg = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");

// populate the thumb-bar with imgs
for (let img of imageNames) {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${img}.jpg`);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (event) => {
    console.log(event.target.src);
    displayedImg.src = event.target.src;
  });
}

// adding grayscale button logic
btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "grayscale") {
    btn.setAttribute("class", "noGrayscale");
    btn.innerText = "OFF";

    displayedImg.style.filter = "grayscale(100%)";
  } else {
    btn.setAttribute("class", "grayscale");
    btn.innerText = "ON";

    displayedImg.style.filter = "none";
  }
});
