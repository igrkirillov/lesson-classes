import Daemon from '../Daemon';

describe('Daemon module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Daemon(name);
    expect(ch.name).toBe(name);
    expect(ch.type).toBe('Daemon');
    expect(ch.health).toBe(100);
    expect(ch.level).toBe(1);
    expect(ch.attack).toBe(10);
    expect(ch.defence).toBe(40);
  })
})