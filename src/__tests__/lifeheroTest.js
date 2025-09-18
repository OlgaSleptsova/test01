
import liveHero from '../livehero.js';
const person = {name: 'Маг', health: 20}




  test('health', () => {

    
 const result = liveHero(person)
    expect(result).toBe('hewounded');
  });


 

  test.each([
    [{name: 'Маг', health: 90},'healthy'],
    [{name: 'Пророк', health: 20},'hewounded'],
    [{name: 'Герой', health: 10},'critical'],
    [{name: 'Макс', health: 'ке'},0]
  ])
('testing liveHero function with %s health',(health,expected) =>
{ const result = liveHero(health);
  expect(result).toBe(expected)
 })