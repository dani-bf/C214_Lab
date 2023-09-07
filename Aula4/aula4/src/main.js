import App from './Jogo.svelte';

// Adicione a classe "container" ao elemento raiz (document.body)
document.body.classList.add('container');

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;
