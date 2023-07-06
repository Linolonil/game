let classImageMapping = {
  sorcerer: "./assets/mago.png",
  knight: "./assets/cavaleiro.png",
  kratos: "./assets/kratos.png",
  yasuo: "./assets/yasuo.png",
};

let monsterImageMapping = {
  big: "./assets/big.png",
  small: "./assets/small.png",
};

let heroImage = classImageMapping[choiceClass];
let monsterImage = monsterImageMapping[choiceMonster];

if (heroImage) {
  document.querySelector(
    ".hero"
  ).innerHTML = `<img class='heroo' src="${heroImage}"/>`;
} else {
  console.log("Classe inválida. Use 'sorcerer' ou 'knight'.");
}

if (monsterImage) {
  document.querySelector(
    ".monster"
  ).innerHTML = `<img class='monsterr' src="${monsterImage}"/>`;
} else {
  console.log("Monstro inválido. Use 'big' ou 'small'.");
}
