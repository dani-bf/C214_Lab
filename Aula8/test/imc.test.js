const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calcula o IMC corretamento e categoriza como "Peso normal"', () => {
    const peso = 70; // 70 kg
    const altura = 175; // 175 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.imc).to.equal(IMEsperado);
    expect(IMCCalculado.categoria).to.equal('Peso normal');
  });

  it('Categoriza como "Obesidade Grau II"', () => {
    const peso = 100; //100 kg
    const altura = 165; //165 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.imc).to.equal(IMEsperado);
    expect(IMCCalculado.categoria).to.equal('Obesidade Grau II');
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });
});