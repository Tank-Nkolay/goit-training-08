// -----------------------------------------------------------------------------
// пример ПОКЕМОН
// -----------------------------------------------------------------------------
// let qqq = document.querySelector('.qqq');
// const www = document.querySelector('.form');
// let onForm;
// let x;

// www.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   qqq.innerHTML = '';

//   const form = e.currentTarget;
//   onForm = form.elements.query.value;

//   return fetch(`https://pokeapi.co/api/v2/pokemon/${onForm}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(pokemon => {
//       x = `
//     <p>Имя: ${pokemon.name} </p>
//     <img src = "${pokemon.sprites.front_default}" alt = "${pokemon.name}" width="200" height="200">
//     <p>Вес: ${pokemon.weight} </p>
//     <p>Рост: ${pokemon.height} </p>`;
//       qqq.insertAdjacentHTML('beforeend', x);
//       console.log(pokemon);
//     })
//     .catch(error => {
//       console.log(error);
//     })
//     .finally(() => www.reset());
// }

// -----------------------------------------------------------------------------
// пример РАБОТА С МАСИВОМ БЭКЕНД
// -----------------------------------------------------------------------------

// ЧИТАЛКА ============================================

// const BASE_URL = 'http://localhost:3000';

// function fetchBooks() {
//   fetch(`${BASE_URL}/books`)
//     .then(res => res.json())
//     .then(console.log);
// }

// fetchBooks();

// function fetchBookById(bookId) {
//   fetch(`${BASE_URL}/books/${bookId}`)
//     .then(res => res.json())
//     .then(console.log);
// }

// fetchBookById(5);
// fetchBookById(7);

// ДОБАВЛЯЕМ ============================================

// const newBook = {
//   title: 'Тестовая книга-2',
//   author: 'Неизвестный автор',
//   genres: ['фантастика'],
//   rating: 8.0,
// };

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options)
//     .then(res => res.json())
//     .then(console.log);
// }

// addBook({
//   title: 'Тестовая книга-3',
//   author: 'Известный автор',
//   genres: ['приключения'],
//   rating: 8.6,
// }).then(renderBook).catch(error => console.log(error));

// function renderBook(book) {
//   console.log('Пришел ответ от БЭКЕНДА можно идти дальше');
//   console.log(book);
// }

// ПЕРЕЗАПИСЬ ============================================

// const BASE_URL = 'http://localhost:3000';

// const options = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ title: 'Новая книга' }),
// };

// fetch(`${BASE_URL}/books/11`, options)
//   .then(res => res.json())
//   .then(console.log);

// улучшаем
// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(res => res.json())
//     .then(console.log);
// }

// updateBookById({ title: 'Страшная книга' }, 10);

// масив
// function fetchBooks() {
//   fetch(`${BASE_URL}/books`)
//     .then(res => res.json())
//     .then(console.log);
// }
// fetchBooks();

// УДАЛЕНИЕ ============================================

// const BASE_URL = 'http://localhost:3000';

// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(res => res.json())
//     .then(console.log)
//     .catch(error => console.log(error));
// }

// removeBook(11);

// масив
// function fetchBooks() {
//   fetch(`${BASE_URL}/books`)
//     .then(res => res.json())
//     .then(console.log);
// }
// fetchBooks();

// -----------------------------------------------------------------------------
// пример TRY CATCH
// -----------------------------------------------------------------------------

// try {
//   console.log('внутри try');
// } catch (error) {
//   console.log('Ошибка!');
// }
// console.log('После try ... catch');

// -----------------------------------------------------------------------------
// пример АССИНХРОННАЯ ФУНКЦИЯ а паралельным вызовом
// -----------------------------------------------------------------------------

// function getFruit(name) {
//   const fruits = {
//     strawberry: 'Клубника',
//     kiwi: 'Киви',
//     apple: 'Яблоко',
//   };

//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
// }

// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');

//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const barry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, barry]);
//     console.log(fruits);

//     // return fruits;

//     console.timeEnd('aMakeSmoothie');
//   } catch (error) {
//     console.log(error);
//   }
// }

// aMakeSmoothie();
// aMakeSmoothie().then(fruits => console.log(fruits));

// ================== пример переводим в АССИНХРОННУЮ ФУНКЦИЮ наш запрос на БЭКЕНД ==================

// const newBook = {
//   title: 'Тестовая книга-2',
//   author: 'Неизвестный автор',
//   genres: ['фантастика'],
//   rating: 8.0,
// };

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();
}

// addBook({
//   title: 'Тестовая книга-3',
//   author: 'Известный автор',
//   genres: ['приключения'],
//   rating: 8.6,
// }).then(renderBook).catch(error => console.log(error));

// function renderBook(book) {
//   console.log('Пришел ответ от БЭКЕНДА можно идти дальше');
//   console.log(book);
// }
