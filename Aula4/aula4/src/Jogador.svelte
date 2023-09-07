<!-- SeuComponente.svelte -->
<script>
	import "bootstrap";
	export let acao;
  </script>
  
  <!-- Personalize as classes ou adicione classes personalizadas -->
  <style>
	/* Personalize o estilo da classe container */
	.container {
	  background-color: #f0f0f0; /* Cor de fundo personalizada */
	  padding: 20px; /* Espaçamento personalizado */
	}
  
	/* Personalize o estilo da classe btn-primary */
	.btn-primary {
	  background-color: #ff5733; /* Cor de fundo personalizada (laranja) */
	  color: #fff; /* Cor de texto personalizada (branco) */
	  border: none; /* Remova a borda dos botões primários */
	  font-weight: bold; /* Tornar o texto em negrito */
	}
  </style>
  
  <div class="container">
	<button class="btn btn-primary" on:click={acao}>Marcar GOL</button>
  </div>
  