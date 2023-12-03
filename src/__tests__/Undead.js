import Undead from '../Undead';

describe('Undead module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Undead(name);
    expect(ch).toEqual({
      name,
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    });
  })
})