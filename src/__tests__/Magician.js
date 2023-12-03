import Magician from '../Magician';

describe('Magician module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Magician(name);
    expect(ch.name).toBe(name);
    expect(ch.type).toBe('Magician');
    expect(ch.health).toBe(100);
    expect(ch.level).toBe(1);
    expect(ch.attack).toBe(10);
    expect(ch.defence).toBe(40);
  })
})