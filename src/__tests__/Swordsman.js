import Swordsman from '../Swordsman';

describe('Magician module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Swordsman(name);
    expect(ch.name).toBe(name);
    expect(ch.type).toBe('Swordsman');
    expect(ch.health).toBe(100);
    expect(ch.level).toBe(1);
    expect(ch.attack).toBe(40);
    expect(ch.defence).toBe(10);
  })
})