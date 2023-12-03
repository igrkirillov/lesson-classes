import Magician from '../Magician';

describe('Magician module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Magician(name);
    expect(ch).toEqual({
      name,
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    });
  })
})