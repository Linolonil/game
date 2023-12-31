let elementoAlvo = document.querySelector("#atacar1");

// Classe de todos os Personagens

class Personagem {
  _life = 1;
  maxLife = 1;
  ataque = 0;
  defesa = 0;

  constructor(name) {
    this.name = name;
  }
  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

// Herois
class Knight extends Personagem {
  constructor(name) {
    super(name);
    this.life = 100;
    this.ataque = 10;
    this.defense = 8;
    this.maxLife = this.life;
  }
}
class Kratos extends Personagem {
  constructor(name) {
    super("KRATOS");
    this.life = 9999;
    this.ataque = 9999;
    this.defense = 9999;
    this.maxLife = this.life;
  }
}
class Yasuo extends Personagem {
  constructor(name) {
    super("Yasuo");
    this.life = 1;
    this.ataque = 9999;
    this.defense = 14;
    this.maxLife = this.life;
  }
}
class Sorcerer extends Personagem {
  constructor(name) {
    super(name);
    this.life = 80;
    this.ataque = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}
// Monstros
class LittleMonster extends Personagem {
  constructor() {
    super("Little Monster");
    this.life = 40;
    this.ataque = 4;
    this.defense = 4;
    this.maxLife = this.life;
  }
}
class BigMonster extends Personagem {
  constructor() {
    super("Big Monster");
    this.life = 120;
    this.ataque = 16;
    this.defense = 6;
    this.maxLife = this.life;
  }
}
// Cenario
class Cenario {
  constructor(fight1, fight2, fight1El, fight2El, logObject) {
    this.fight1 = fight1;
    this.fight2 = fight2;
    this.fight1El = fight1El;
    this.fight2El = fight2El;
    this.log = logObject;
  }
  start() {
    this.update();

    // Adicionar event listener ao botão de ataque do fight1
    this.fight1El.querySelector("#atacar1").addEventListener("click", () => {
      this.doAttack(this.fight1, this.fight2);
    });

    // Adicionar event listener ao botão de ataque do fight2
    this.fight2El.querySelector("#atacar2").addEventListener("click", () => {
      this.doAttack(this.fight2, this.fight1);
    });
  }

  update() {
    // Fighter 1

    this.fight1El.querySelector(".name").innerHTML = `${
      this.fight1.name
    } - ${this.fight1.life.toFixed(1)}HP`;
    let f1Pct = (this.fight1.life / this.fight1.maxLife) * 100;
    this.fight1El.querySelector(".lifebar .bar").style.width = `${f1Pct}%`;

    // Fighter 2

    this.fight2El.querySelector(".name").innerHTML = `${
      this.fight2.name
    } - ${this.fight2.life.toFixed(1)} HP`;
    let f2Pct = (this.fight2.life / this.fight2.maxLife) * 100;
    this.fight2El.querySelector(".lifebar .bar").style.width = `${f2Pct}%`;
  }
  doAttack(attacking, attacked) {
    if (attacked.life <= 0) {
      this.log.addMessage(`Atacando cachorro morto`);
      return;
    }
    if (attacking.life <= 0) {
      this.log.addMessage(`Morto não ataca`);
      return;
    }

    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAttack = attacking.ataque * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      this.log.addMessage(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }`
      );
    } else {
      this.log.addMessage(`${attacked.name} conseguiu defender!`);
    }
    this.update();
  }
}
// Mensagens da batalha
class Log {
  list = [];
  constructor(listEl) {
    this.listEl = listEl;
  }
  addMessage(msg) {
    this.list.push(msg);
    this.render();
  }
  render() {
    this.listEl.innerHTML = "";
    for (let i in this.list) {
      this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}
