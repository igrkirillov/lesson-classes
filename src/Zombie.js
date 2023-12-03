import Character from "./Character.js";
export default class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie", 100, 1, 40, 10);
  }
}