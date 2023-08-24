const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const movies = [];

function displayMenu() {
  console.log('\nMenu:');
  console.log('1 - Adicionar um novo filme');
  console.log('2 - Marcar um filme como assistido');
  console.log('3 - Avaliar um filme');
  console.log('4 - Exibir a lista de filmes');
  console.log('5 - Sair do programa');
}

function addMovie() {
  rl.question('Digite o nome do filme que deseja adicionar: ', (name) => {
    movies.push({ name, watched: false, rating: null });
    console.log(`"${name}" foi adicionado à lista.`);
    displayMenu();
    askUser();
  });
}

function markAsWatched() {
  if (movies.length === 0) {
    console.log('A lista de filmes está vazia.');
    displayMenu();
    askUser();
  } else {
    console.log('Filmes disponíveis:');
    movies.forEach((movie, index) => {
      const status = movie.watched ? 'Assistido' : 'Não assistido';
      console.log(`${index + 1}. ${movie.name} (${status})`);
    });

    rl.question('Digite o número do filme que deseja marcar como assistido: ', (index) => {
      index = parseInt(index) - 1;

      if (index >= 0 && index < movies.length) {
        movies[index].watched = true;
        console.log(`"${movies[index].name}" foi marcado como assistido.`);
      } else {
        console.log('Índice inválido.');
      }

      displayMenu();
      askUser();
    });
  }
}

function rateMovie() {
  if (movies.length === 0) {
    console.log('A lista de filmes está vazia.');
    displayMenu();
    askUser();
  } else {
    console.log('Filmes disponíveis:');
    movies.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.name}`);
    });

    rl.question('Digite o número do filme que deseja avaliar: ', (index) => {
      index = parseInt(index) - 1;

      if (index >= 0 && index < movies.length) {
        rl.question(`Digite a avaliação para "${movies[index].name}" (de 1 a 5): `, (rating) => {
          rating = parseInt(rating);

          if (rating >= 1 && rating <= 5) {
            movies[index].rating = rating;
            console.log(`"${movies[index].name}" foi avaliado com ${rating} estrela(s).`);
          } else {
            console.log('Avaliação inválida. A avaliação deve ser um número de 1 a 5.');
          }

          displayMenu();
          askUser();
        });
      } else {
        console.log('Índice inválido.');
        displayMenu();
        askUser();
      }
    });
  }
}

function displayMovies() {
  if (movies.length === 0) {
    console.log('A lista de filmes está vazia.');
  } else {
    console.log('Lista de filmes:');
    movies.forEach((movie, index) => {
      const status = movie.watched ? 'Assistido' : 'Não assistido';
      const rating = movie.rating !== null ? `Avaliação: ${movie.rating}` : 'Ainda não avaliado';
      console.log(`${index + 1}. ${movie.name} (${status}) - ${rating}`);
    });
  }

  displayMenu();
  askUser();
}

function askUser() {
  rl.question('Escolha uma opção (1/2/3/4/5): ', (choice) => {
    switch (choice) {
      case '1':
        addMovie();
        break;
      case '2':
        markAsWatched();
        break;
      case '3':
        rateMovie();
        break;
      case '4':
        displayMovies();
        break;
      case '5':
        console.log('Saindo do programa.');
        rl.close();
        break;
      default:
        console.log('Opção inválida. Por favor, escolha uma opção válida.');
        displayMenu();
        askUser();
    }
  });
}

console.log('Bem-vindo à lista de filmes!');
displayMenu();
askUser();
