import Character from './Character';
export default class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowerman");
    this.defence = 25;
    this.attack = 25;
  }
}