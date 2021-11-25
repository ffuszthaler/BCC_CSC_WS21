const story = {
  currentScene: "introRoom",
  introRoom: {
    title: "Welcome to your prison",
    story:
      "You might have already realized but you are stuck here, to escape you need to make the right decision or expect consequences! Are you ready?",
    choices: [
      {
        value: "Yes, I'm ready!",
        destination: "firstRoom",
      },
      {
        value: "Meh, think I'd rather stay here",
        destination: "deathRoom",
      },
    ],
    image: "intro_room.png",
  },
  firstRoom: {
    title: "Welcome to the first room!",
    story:
      "Your first decision will be to guess the correct answer to my question. What is my name?",
    choices: [
      {
        value: "Francis",
        destination: "deathRoom",
      },
      {
        value: "Stevie",
        destination: "secondRoom",
      },
      {
        value: "Death",
        destination: "deathRoom",
      },
    ],
    image: "first_room.png",
  },
  secondRoom: {
    title: "Welcome to the second room!",
    story:
      "Congrats! - Your next decision will be to choose the correct item to open a jar of pickles.",
    choices: [
      {
        value: "Nothing, just your hands",
        destination: "deathRoom",
      },
      {
        value: "Knife",
        destination: "deathRoom",
      },
      {
        value: "Spoon",
        destination: "thirdRoom",
      },
    ],
    image: "second_room.png",
  },
  thirdRoom: {
    title: "Welcome to the third room!",
    story: "Good job! - The third decision is to shout the correct keyword.",
    choices: [
      {
        value: "Open sesame!",
        destination: "fourthRoom",
      },
      {
        value: "Open corn!",
        destination: "deathRoom",
      },
      {
        value: "Open the door!",
        destination: "deathRoom",
      },
    ],
    image: "third_room.png",
  },
  fourthRoom: {
    title: "Welcome to the fourth room!",
    story:
      "Almost at the end - Now imagine you have the ability to save either your best friend or your family! - Which one will you choose?",
    choices: [
      {
        value: "Family",
        destination: "fifthRoom",
      },
      {
        value: "Best Friend",
        destination: "fifthRoom",
      },
    ],
    image: "fourth_room.png",
  },
  fifthRoom: {
    title: "Welcome to the fifth room!",
    story:
      "You are a monster, but I like you - Last decision, What am I eating at the moment?",
    choices: [
      {
        value: "Sesame",
        destination: "deathRoom",
      },
      {
        value: "Pickles",
        destination: "finalRoom",
      },
      {
        value: "Nothing",
        destination: "deathRoom",
      },
    ],
    image: "fifth_room.png",
  },
  finalRoom: {
    title: "You did it! - You made the right calls, right?",
    story: "Go again?",
    choices: [
      {
        value: "Yes",
        destination: "introRoom",
      },
      {
        value: "No",
        destination: "deathRoom",
      },
    ],
    image: "final_room.png",
  },
  deathRoom: {
    title: "Wrong decision!",
    story: "You died - painfully and slow!",
    choices: [
      {
        value: "Wanna try again?",
        destination: "introRoom",
      },
    ],
    image: "death_room.png",
  },
};
