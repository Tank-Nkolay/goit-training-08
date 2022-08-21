// -----------------------------------------------------------------------------
// пример ПОКЕМОН
// -----------------------------------------------------------------------------

// app.set('view engine', 'hbs');

// import pokemonCardTpl from './';
// import q from '../../templat';

const qqq = document.querySelector('.qqq');
const www = document.querySelector('.form');
let onForm;

www.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  onForm = form.elements.query.value;
  return fetch(`https://pokeapi.co/api/v2/pokemon/${onForm}`)
    .then(response => {
      return response.json();
    })
    .then(pokemon => {
      const x = `
    <p>Имя: ${pokemon.name} </p>
    <img src = "${pokemon.sprites.front_default}" alt = "${pokemon.name}" width="200" height="200">
    <p>Вес: ${pokemon.weight} </p>
    <p>Рост: ${pokemon.height} </p>`;
      qqq.insertAdjacentHTML('beforeend', x);
      console.log(pokemon);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => www.reset());
}
