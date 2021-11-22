// * /////////////// * //
// * Objects - cont. * //
// * /////////////// * //

const hero = {
  name: "Tony Stark",
  alias: "IronMan",
  age: 45,
  abilities: ["Smart", "Money", "Fly", "Laser Gun"],
  attack: (sound) => {
    return `${hero.alias} (attacks foe) - ${sound}`;
  },
};

console.log(hero.attack("PewPew"));
