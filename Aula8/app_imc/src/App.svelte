<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classificacao = ''; // Classificação do IMC
  
	// Função para calcular o IMC e a classificação
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
  
		// Calculando a classificação
		if (imc < 18.5) {
		  classificacao = 'Abaixo do peso';
		} else if (imc < 25) {
		  classificacao = 'Peso ideal (Parabéns)';
		} else if (imc < 30) {
		  classificacao = 'Levemente acima do peso';
		} else if (imc < 35) {
		  classificacao = 'Obesidade grau 1';
		} else if (imc < 40) {
		  classificacao = 'Obesidade grau 2 (severa)';
		} else {
		  classificacao = 'Obesidade grau 3 (mórbida)';
		}
	  } else {
		imc = 0;
		classificacao = '';
	  }
	}
  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é {imc} - {classificacao}</p>
	{/if}
  </main>
  
  <style>
	body {
		font-family: Arial, sans-serif;
		background-color: #F8F9FA;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	main {
		font-family: sans-serif;
		text-align: center;
		padding: 2rem;
		border: 1px solid #DDD;
		border-radius: 10px;
		background-color: #FFF;
		width: 80%;
		margin: 0 auto;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	}

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #007BFF;
		font-weight: bold;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
		color: #333;
	}

	input {
		width: 100%;
		padding: 0.25rem;
	}

	p {
		color: #28A745;
		font-weight: bold;
		font-size: 1.2rem;
		margin-top: 1rem;
	}
</style>
  