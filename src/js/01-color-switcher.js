// -----------------------------------------------------------------------------
// пример ПОКЕМОН
// -----------------------------------------------------------------------------

// import pokemonCardTpl from '../../template/pokemon.hbs';

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(error => {
    console.log(error);
  });
