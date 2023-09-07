<!-- SeuComponente.svelte -->
<script>
    import Jogador from "./Jogador.svelte";
  
    function marcaGol() {
      console.log("Marcou 1 GOL");
    }
  </script>
  
  <main class="container">
    <h1>Exibe a informação quando marca GOL</h1>
    <Jogador acao={marcaGol} />
  </main>
  