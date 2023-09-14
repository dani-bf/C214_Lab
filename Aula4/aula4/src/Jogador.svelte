<!-- SeuComponente.svelte -->
<script>
	import "bootstrap"; // Importe o Bootstrap
	export let acao;
	export let golMarcado = false; 
</script>

<style>
	/* Personalize o estilo da classe container */
	.container {
		background-color: #f0f0f0; /* Cor de fundo personalizada */
		padding: 20px; /* Espaçamento personalizado */
		text-align: center; /* Centralize o conteúdo horizontalmente */
		margin-top: 20px; /* Espaçamento superior */
	}

	/* Personalize o estilo da classe mensagem-gol */
	.mensagem-gol {
		font-weight: bold; /* Tornar o texto em negrito */
		color: #28a745; /* Cor verde para a mensagem "Gol marcado!" */
		font-size: 24px; /* Tamanho da fonte */
		margin-top: 10px; /* Espaçamento superior */
	}

	/* Personalize o estilo do botão usando as classes do Bootstrap */
	.btn-primary {
		font-weight: bold; /* Tornar o texto em negrito */
	}
</style>

<div class="container">
	<button class="btn btn-primary" on:click={acao}>Marcar GOL</button>

	<!-- Exiba a mensagem quando golMarcado for true -->
	{#if golMarcado}
		<div class="mensagem-gol">Gol marcado!</div>
	{/if}
</div>
