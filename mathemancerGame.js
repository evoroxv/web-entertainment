var experience = 0;
var monsters_slain = 0;
var level = 1;
var levelLimit = 10;
var health = level * 5;
var currentHealth = health;
var hpLength = 150 * (currentHealth / health);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#cc0000";
ctx.fillRect(50,50,hpLength,25);
ctx.strokeRect(50,50,150,25);

ctx.textAlign = "right"
ctx.fillStyle = "#ffffff"
ctx.font="20px Verdana"
ctx.fillText("HP: " + health,100,100)

ctx.fillStyle = "#cc0000";
ctx.fillRect(600,525,hpLength,25);
ctx.strokeRect(600,525,150,25);

ctx.textAlign = "left"
ctx.fillStyle = "#ffffff"
ctx.font="20px Verdana"
ctx.fillText("HP: " + currentHealth,650,575)

//magic
var spells = ["Fire","Ice","Stone","Arcane","Lightning"];
class spellComponents {
  constructor(spellId) {
    this.spellId = 0;
    this.spellName = "";
    this.opSymbol = "";
    this.spellTag = none;
    this.spellAnswer = doOperation(spellNum1, opSymbol, spellNum2);
  }
  doOperation(spellNum1, opSymbol, spellNum2) {
    return spellNum1 + opSymbol + spellNum2;
  }
}

//var spellComponent = {
//  id: 0,
//  spellAnswer: doOperation(),
//  opSymbol: "+",
//  spellName: "Fireball",
//  spellTag: none;
//}

//function castSpell() {

//}

//random integer generation
var numbersSimple = randInt(1, 10);
var spellNum1 = randInt(1, 20);
var spellNum2 = randInt(1, 20);
var toHit = randInt(1, 100);

function randInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//score / leveling

function levelUp() {
  level = (level+1);
  levelLimit = ((level**2)*10);
}
function gainXP() {
  experience = (experience + monsterXp)
  if (experience >= levelLimit) {
    levelUp();
  }
}
function monsterKilled() {
  monsters_slain += 1
  gainXP()
}

//monster classes
class creature {
  constructor() {
    this.id = 0;
    this.name = "creature";
    this.image = none;
    this.health = 1;
    this.attack = 50;
    this.damage = 1;
    this.level = 1;
  }
  dealDamage(x) {
    if (toHit <= creature.attack) {
      currentHealth-=creature.damage;
//    else
    }
  }
  class monster extends creature {
    super
  }
}

//constructor player() {
//  this.name: "player";
//  this.image: none;
//  this.health: 5;
//  this.attack: 50;
//  this.level: 1;
//  this.experience: 0;

//var goblin = {
//  name : "Goblin",
//  id : "goblin",
//  hitPoints : 5,
//  damage : 1,
//  attack : dealDamage() {
//    if (toHit <= 50) {
//      health = (health - goblin.damage)
//    }
//    else {
//
//    }
//  }
//}
