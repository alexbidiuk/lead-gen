const questions = [
  {
    title:'Введите Ваше имя?',
    userField: 'name',
    type: 'open'
  },
  {
    title:'Введите Ваш телефон?',
    userField: 'phone',
    type: 'open'
  },
  {
    title:'Введите Ваш город?',
    userField: 'city',
    type: 'open'
  },
  {
    title:'Сколько параметров можно передать функции ?',
    vars: [
      [{ text: 'Ровно столько, сколько указано в определении функции.', callback_data: '3_1' }],
      [{ text: 'Сколько указано в определении функции или меньше.', callback_data: '3_2' }],
      [{ text: 'Сколько указано в определении функции или больше.', callback_data: '3_3' }],
      [{ text: 'Любое количество.', callback_data: '3_4' }]
    ],
    type: 'vars',
  },
  {
    title:'Чему равна переменная name?\nvar name = "пупкин".replace("п", "д")',
    vars: [
      [{ text: 'дудкин', callback_data: '4_1' }],
      [{ text: 'дупкин', callback_data: '4_2' }],
      [{ text: 'пупкин', callback_data: '4_3' }],
      [{ text: 'ляпкин-тяпкин', callback_data: '4_4' }]
    ],
    type: 'vars',
  },
  {
    title:'Чему равно 0 || "" || 2 || true ?',
    vars: [
      [{ text: '0', callback_data: '5_1' }],
      [{ text: '""', callback_data: '5_2' }],
      [{ text: '2', callback_data: '5_3' }],
      [{ text: 'true', callback_data: '5_4' }]
    ],
    type: 'vars',
  },
];

module.exports = questions;
