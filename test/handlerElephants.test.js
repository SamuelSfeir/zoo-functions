const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('O parametro count deve retornar 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('O parametro names deve incluir Jefferson', () => {
    const names = handlerElephants('names');
    expect(names).toContain('Jefferson');
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const averageAge = handlerElephants('averageAge');
    expect(averageAge).toBeCloseTo(10.5);
  });

  it('Para o argumento location deve retornar a string NW', () => {
    const location = handlerElephants('location');
    expect(location).toBe('NW');
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    const noArguments = undefined;
    expect(noArguments).toBeUndefined();
  });

  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const popularity = handlerElephants('popularity');
    expect(popularity).toBeGreaterThanOrEqual(5);
  });

  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday;', () => {
    const availability = handlerElephants('availability');
    expect(availability).not.toContain('monday');
  });

  it('Deve retornar null para um parâmetro desconhecido', () => {
    const result = handlerElephants('parâmetroDesconhecido');
    expect(result).toBeNull();
  });
});
