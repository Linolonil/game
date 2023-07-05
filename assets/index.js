  let log = new Log(document.querySelector(".log"));
  let choiceName = prompt('Digite o nome do seu cavaleiro');
  let choiceClass = prompt('Digite a classe do seu cavaleiro (sorcerer ou knight)');
  let choiceMonster = prompt('Digite qual o monstro que deseja enfrentar (small ou big)');
  let char;
  let monster;

  if (choiceClass.toLowerCase() === 'sorcerer') {
    char = new Sorcerer(`${choiceName} o Mago`);
  } else if (choiceClass.toLowerCase() === 'knight') {
    char = new Knight(`${choiceName} o Cavaleiro`);
  } else {
    log.add("Classe inválida. Use 'sorcerer' ou 'knight'.");
  }

  if (choiceMonster.toLowerCase() === 'big') {
    monster = new BigMonster();
  } else if (choiceMonster.toLowerCase() === 'small') {
    monster = new LittleMonster();
  } else {
    log.add("Monstro inválido. Use 'big' ou 'small'.");
  }

  document.querySelector('#char .name').textContent = char.name;
  document.querySelector('#monster .name').textContent = monster.name;

  const stage = new Cenario(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
  );

  stage.start();
