import Bowerman from '../Bowerman';

describe('Bowerman module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Bowerman(name);
    expect(ch.name).toBe(name);
    expect(ch.type).toBe('Bowerman');
    expect(ch.health).toBe(100);
    expect(ch.level).toBe(1);
    expect(ch.attack).toBe(25);
    expect(ch.defence).toBe(25);
  })
})