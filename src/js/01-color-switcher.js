// -----------------------------------------------------------------------------
// пример ПОКЕМОН
// -----------------------------------------------------------------------------

// app.set('view engine', 'hbs');

// import pokemonCardTpl from '';
// import q from '../../templat';

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
