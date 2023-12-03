import Bowerman from '../Bowerman';

describe('Bowerman module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Bowerman(name);
    expect(ch).toEqual({
      name,
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    });
  })
})