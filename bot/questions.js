const questions = [
  {
    title:'Введите Ваше имя.',
    userField: 'name',
    type: 'open'
  },
  {
    title:'Введите Ваш телефон.',
    userField: 'phone',
    type: 'open'
  },
  {
    title:'Введите Ваш город.',
    userField: 'city',
    type: 'open'
  },
  {
    title:'Откуда вы берете информацию для настройки таргетинга ?',
    vars: [
      [{ text: 'Прошу у клиента / Своего Project-manager-а', callback_data: '3_4' }],
      [{ text: 'Из головы — я все знаю, мне не нужна дополнительная информация', callback_data: '3_0' }],
      [{ text: 'Гуглю, ищу в YouTube похожие кейсы', callback_data: '3_2' }],
      [{ text: 'Изучаю конкурентов, на которые ссылается клиент', callback_data: '3_3' }]
    ],
    type: 'vars',
  },















];

module.exports = questions;
