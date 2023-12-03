import Character from '../Character';

describe('character module', () => {
  test('name checks', () => {
    expect(() => new Character('A')).toThrow('Длина параметра name не в интервале [2,10]');
    expect(() => new Character('AAAAAAAAAAA')).toThrow('Длина параметра name не в интервале [2,10]');
    expect(() => new Character(null)).toThrow('Параметр name не строка');
  });
  test('type checks', () => {
    expect(() => new Character('AB', 'BowermanZ')).toThrow(Error);
  });
  test ('all fields', () => {
    const name = 'AB';
    const type = 'Bowerman';
    const health = 100;
    const level = 1;
    const attack = undefined;
    const defence = undefined;
    const ch = new Character(name, type);
    expect(ch).toEqual({
      name, type, health, level, attack, defence
    })
  })
})