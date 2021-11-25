console.log("live reload works!");

function changeBackground(imgPath) {
  const background = document.getElementById("background");
  background.style.backgroundImage = `url(${imgPath})`;
}

function startGame() {
  // changeBackground('./img/B_cabin.jpg'); // works in firefox
  let enterCabin = confirm(
    "You come across a strange house in the woods. Do you want to go in?"
  );

  if (enterCabin) {
    let porridgeChoice = +prompt(
      "You walk into the cabin and see a lovely kitchen. On the table are three bowls of porridge. Do you try 1 (hot), 2 (cold) or 3 (just right)?"
    );

    switch (porridgeChoice) {
      case 1:
        alert("The porridge is too hot! You burned your mouth!\nFIN");
        break;

      case 2:
        alert("The porridge is too cold!\nFIN");
        break;

      case 3:
        alert("The porridge is just right!");

        let chairChoice = prompt(
          "You walk into the living room and see three chairs. A BIG one, MEDIUM one and SMALL one. Which one do you choose?"
        );

        if (chairChoice.toLowerCase() === "big") {
          alert("The chair is way too big!\nFIN");
        } else if (chairChoice.toLowerCase() === "small") {
          alert("The chair is way too small!\nFIN");
        } else {
          alert("The chair is just right...");

          let bedChoice = prompt(
            "You walk into the next room over and see three beds, a (BIG) one, a (MEDIUM) one and a (SMALL) one. Which one do you choose?"
          );

          if (bedChoice.toLowerCase() === "big") {
            alert("It's too hard you can't sleep.\nFIN");
          } else if (bedChoice.toLowerCase() === "small") {
            alert("It's too soft you can't sleep.\nFIN");
          } else {
            alert("The bed is just right...");
            alert("It's just right and you fall into a deep slumber.");
            alert("You wake up to see three bears looking at you.");
            alert("You are shocked and get up in order to run away");
            alert(
              "However, you can not run fast enough.\n\nYou have been eaten!\n\n(Dark Souls screen blends in and music plays)"
            );
          }
        }
        break;

      default:
        // reask user
        break;
    }
  } else {
    alert("You don't go into the cabin. Well... That's all Folks.\nFIN");
  }
}

changeBackground("./img/B_cabin.jpg");
