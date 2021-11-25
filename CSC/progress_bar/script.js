let progressWrapper = document.querySelector(".progress_wrapper");
let progressBar = document.querySelector(".progress_bar");
let progressBtn = document.querySelector(".progress_btn");
let counter = document.querySelector(".counter");

const startFilling = () => {
  let width = 1;

  const addStep = () => {
    width = width + 1;
    console.log(width);

    counter.innerHTML = width + "%";

    progressBar.style.width = width + "%";

    if (width > 0 && width < 25) {
      progressBar.style.backgroundColor = "#fb4b4b";
    } else if (width > 25 && width < 50) {
      progressBar.style.backgroundColor = "#ffc163";
    } else if (width > 50 && width < 75) {
      progressBar.style.backgroundColor = "#feff5c";
    } else if (width && width > 75) {
      progressBar.style.backgroundColor = "#c0ff33";
    }

    if (width === 100) {
      clearInterval(interval);
      width = 1;
    }
  };

  let interval = setInterval(addStep, 50);
};

progressBtn.addEventListener("click", startFilling);
