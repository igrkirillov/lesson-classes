import Character from "./Character.js";
export default class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.defence = 25;
    this.attack = 25;
  }
}