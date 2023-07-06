let log = new Log(document.querySelector(".log"));
let char;
let monster;

let classMapping = {
  sorcerer: Sorcerer,
  knight: Knight,
  kratos: Kratos,
  yasuo: Yasuo,
};

let monsterMapping = {
  big: BigMonster,
  small: LittleMonster,
};

let choiceClass = prompt(
  "Digite a classe do seu cavaleiro (sorcerer, knight)"
).toLowerCase();
let choiceMonster = prompt(
  "Digite qual o monstro que deseja enfrentar (small ou big)"
).toLowerCase();

if (classMapping.hasOwnProperty(choiceClass)) {
  if (choiceClass === "kratos") {
    char = new Kratos();
  } else if (choiceClass === "yasuo") {
    char = new Yasuo();
  } else {
    let choiceName = prompt(`Digite o nome do seu ${choiceClass}`);
    char = new classMapping[choiceClass](`${choiceName} o ${choiceClass}`);
  }
} else {
  log.add("Classe inválida. Use 'sorcerer', 'knight'");
}

if (monsterMapping.hasOwnProperty(choiceMonster)) {
  monster = new monsterMapping[choiceMonster]();
} else {
  log.add("Monstro inválido. Use 'big' ou 'small'.");
}

document.querySelector("#char .name").textContent = char ? char.name : "";
document.querySelector("#monster .name").textContent = monster
  ? monster.name
  : "";

if (char && monster) {
  const stage = new Cenario(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
  );
  stage.start();
}
