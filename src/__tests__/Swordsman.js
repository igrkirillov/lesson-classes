import Swordsman from '../Swordsman';

describe('Swordsman module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Swordsman(name);
    expect(ch).toEqual({
      name,
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    });
  })
})