import Zombie from '../Zombie';

describe('Zombie module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Zombie(name);
    expect(ch).toEqual({
      name,
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    });
  })
})