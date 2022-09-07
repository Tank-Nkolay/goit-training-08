// слушаем и получаем данные от формы ввода,списка и кнопок
const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  buttons: document.querySelector('.buttons'),
};

// подписываемся на действие САБМИТ
const handleSubmit = e => {
  e.preventDefault();

  // получаем данные из САБМИТ формы после отправки
  const query = e.target.elements.query.value;
  console.log(query);
};

refs.form.addEventListener('submit', handleSubmit);
