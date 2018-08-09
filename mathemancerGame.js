function startGame() {
  myGameArea.start();
}
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}
var toHit = Math.floor(Math.random() * 100) + 1;
var experience = 0;
var monsters_slain = 0;
var level = 1;
var levelLimit = {
  (level**2)*10;
}
var health = {
  level*5;
}
function levelUp() {
  level = (level+1);
}
function gainXP() {
  experience = (experience + monsterXp)
  if (experience >= levelLimit) {
    levelUp();
  }
}
function castSpell() {

}
var goblin = {
  name : "Goblin",
  id : "goblin",
  hitPoints : 5,
  damage : 1,
  attack : dealDamage() {
    if (toHit <= 50) {
      health = (health - goblin.damage)
    }
    else {
      
    }
  }
}
