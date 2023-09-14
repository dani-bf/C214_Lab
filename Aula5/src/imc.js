function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
  
    let categoria = '';
  
    if (imc < 16) {
      categoria = 'Magreza grave';
    } else if (imc >= 16 && imc < 16.9) {
      categoria = 'Magreza moderada';
    } else if (imc >= 17 && imc < 18.4) {
      categoria = 'Magreza leve';
    } else {
      categoria = 'Peso saudável';
    }
  
    return { imc, categoria };
  }
  
  module.exports = { calcularIMC };
  