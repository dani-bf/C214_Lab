const { expect } = require('chai');
const { calcularIMC } = require('../src/imc'); 

describe('Calculadora de IMC', () => {
  it('IMC na categoria "Magreza grave"', () => {
    const peso = 40; // 40 kg
    const altura = 160; // 160 cm

    const resultado = calcularIMC(peso, altura);

    expect(resultado.categoria).to.equal('Magreza grave');
  });

  it('IMC na categoria "Peso saudável"', () => {
    const peso = 70; // 70 kg
    const altura = 170; // 170 cm

    const resultado = calcularIMC(peso, altura);

    expect(resultado.categoria).to.equal('Peso saudável');
  });
});
