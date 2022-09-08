import axios from 'axios';

// дефолтный URL, он вставляется в строку запроса на сервер
axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// слушаем и получаем данные от формы ввода,списка и кнопок
const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  buttons: document.querySelector('.buttons'),
};

let query = '';
let page = 0;
let items = [];
// количество всех страниц которые нашли по запросу
let totalPages = 0;

// отдельная функция под items в функции fetchData ===========
const render = () => {
  const list = items
    .map(({ title, url }) => `<ul><a href="${url}">${title}</a></ul>`)
    .join('');
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list);
  console.log(items);
};

// функция запроса на сервер =========================
const fetchData = () => {
  axios
    .get(`/search?query=${query}&page=${page}`)
    .then(({ data }) => {
      // записываем hits, определив что это наши данные из масива
      items = data.hits;
      totalPages = data.nbPages;
      console.log(data);
      console.log(totalPages);
      render();
    })
    .catch(error => console.log(error.message));
};

// подписываемся на действие САБМИТ
const handleSubmit = e => {
  e.preventDefault();
  // получаем данные из САБМИТ формы после отправки
  query = e.target.elements.query.value;
  console.log(query);
  // выполняем функцию и получаем масив(страница) данных
  fetchData();
};

refs.form.addEventListener('submit', handleSubmit);
