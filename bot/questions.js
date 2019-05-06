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
  {
    title:'Легко ли вы обучаетесь новому:',
    vars: [
      [{ text: 'Заставляю себя, понимаю, что надо', callback_data: '4_3' }],
      [{ text: 'Легко и с удовольствием', callback_data: '4_4' }],
      [{ text: 'Все, что надо, я уже знаю', callback_data: '4_0' }],
      [{ text: 'Нужная информация находит меня сама в процессе работы', callback_data: '4_2' }]
    ],
    type: 'vars',
  },
  {
    title:'Клиент говорит, что у вас ошибки в таргетинге. Ваши действия ?',
    vars: [
      [{ text: 'На мне ответственность - значит за мною решения', callback_data: '5_1' }],
      [{ text: 'Я сам все знаю Это их проблема', callback_data: '5_0' }],
      [{ text: 'Выделю время, чтобы проанализировать что может быть не так', callback_data: '5_4' }],
      [{ text: 'Стану более внимательно настраивать таргетинг', callback_data: '5_2' }]
    ],
    type: 'vars',
  },
  {
    title:'Готовы ли вы признавать свои ошибки?',
    vars: [
      [{ text: 'Да, если убедят меня, что я неправ', callback_data: '6_4' }],
      [{ text: 'Да, без лишних объяснений (легко) ', callback_data: '6_1' }],
      [{ text: 'Нет, если я что-то решил, то только так и правильно', callback_data: '6_0' }],
      [{ text: 'Готов, но мне это неприятно', callback_data: '6_3' }]
    ],
    type: 'vars',
  },
  {
    title:'Вы получили техническое задание на настройку рекламы.\n' +
      'У клиента/Project-manager - a четкие требования, но у вас есть идея, которая им не соответствует.\n' +
      'Как вы поступите:\n',
    vars: [
      [{ text: 'Обсужу идею с клиентом и предложу протестировать', callback_data: '7_4' }],
      [{ text: 'Задание есть задание, а мои идеи не повод от него отклоняться', callback_data: '7_2' }],
      [{ text: 'Без ведома клиента сделаю настройку и запущу. Если получится хороший результат - расскажу', callback_data: '7_1' }],
      [{ text: 'Буду настраивать так, как вижу. Что клиент понимает в таргетинге', callback_data: '7_0' }]
    ],
    type: 'vars',
  },
  {
    title:'Где находится база лидов, которые были собраны через лид форму?',
    vars: [
      [{ text: 'в Ads Manager в разделе “Аудитория"', callback_data: '8_1' }],
      [{ text: 'в “Инструментах для публикаций” публичной страницы', callback_data: '8_4' }],
      [{ text: 'в Business Manager в меню “Источники данных”', callback_data: '8_0' }],
      [{ text: 'в Ads Manager в разделе “Каталоги”', callback_data: '8_0' }]
    ],
    type: 'vars',
  },{
    title:'На каком уровне аккаунта находится выбор плейсментов для размещения рекламы?',
    vars: [
      [{ text: 'только на уровне кампаний ', callback_data: '9_1' }],
      [{ text: 'на уровне кампаний и на уровне групп объявлений ', callback_data: '9_2' }],
      [{ text: 'только на уровне групп объявлений ', callback_data: '9_4' }],
      [{ text: 'на уровне обзора рекламного кабинета', callback_data: '9_0' }]
    ],
    type: 'vars',
  },{
    title:'Какую индивидуализированную аудиторию нельзя создать?',
    vars: [
      [{ text: 'посетители страницы ', callback_data: '10_0' }],
      [{ text: 'просматривали видео ', callback_data: '10_0' }],
      [{ text: 'видели рекламу', callback_data: '10_4' }],
      [{ text: 'взаимодействовали с моей публичной страницей', callback_data: '10_0' }]
    ],
    type: 'vars',
  },{
    title:'На каком уровне аккаунта можно задавать цели рекламы на Facebook?',
    vars: [
      [{ text: 'только на уровне кампаний', callback_data: '11_4' }],
      [{ text: 'на уровне рекламных объявлений', callback_data: '11_0' }],
      [{ text: 'на уровне групп объявлений и на уровне кампаний', callback_data: '11_0' }],
      [{ text: 'только на уровне групп объявлений', callback_data: '11_0' }]
    ],
    type: 'vars',
  },{
    title:'Какую цель рекламной кампании необходимо выбрать для сбора лидов на лид форму?',
    vars: [
      [{ text: 'цель “Конверсии”', callback_data: '12_0' }],
      [{ text: 'цель “Вовлеченность”', callback_data: '12_0' }],
      [{ text: 'цель “Генерация лидов”', callback_data: '12_4' }],
      [{ text: 'цель “Трафик”', callback_data: '12_0' }]
    ],
    type: 'vars',
  },{
    title:'Какие дополнительные рекламные цели кампании важны, если Вы хотите чтобы о Вашей компании узнало, как можно больше людей?',
    vars: [
      [{ text: 'конверсии', callback_data: '13_2' }],
      [{ text: 'узнаваемость бренда и охват', callback_data: '13_4' }],
      [{ text: 'вовлеченность и трафик', callback_data: '13_1' }],
      [{ text: 'охват и просмотры видео', callback_data: '13_3' }]
    ],
    type: 'vars',
  },{
    title:'Какую цель рекламной кампании необходимо выбрать для сбора регистраций на лендинге?',
    vars: [
      [{ text: 'цель “Конверсии” ', callback_data: '14_4' }],
      [{ text: 'цель “Вовлеченность” ', callback_data: '14_1' }],
      [{ text: 'цель “Генерация лидов”', callback_data: '14_0' }],
      [{ text: 'цель “Трафик”', callback_data: '14_2' }]
    ],
    type: 'vars',
  },{
    title:'Выберите максимальный размер Lookalike аудитории от общего населения страны, предлагаемый стандартными средствами Фейсбук',
    vars: [
      [{ text: '1%', callback_data: '15_1' }],
      [{ text: '5%', callback_data: '15_2' }],
      [{ text: '10%', callback_data: '15_4' }],
      [{ text: '15%', callback_data: '15_0' }]
    ],
    type: 'vars',
  },{
    title:'Какой показатель отвечает за стоимость 1000 показов рекламного объявления?',
    vars: [
      [{ text: 'CPA', callback_data: '16_0' }],
      [{ text: 'CPC', callback_data: '16_0' }],
      [{ text: 'CTR', callback_data: '16_0' }],
      [{ text: 'CPM', callback_data: '16_4' }]
    ],
    type: 'vars',
  },{
    title:'Какое максимальное допустимое  количество объявлений в рекламном кабинете?',
    vars: [
      [{ text: '3500', callback_data: '17_2' }],
      [{ text: '3000', callback_data: '17_1' }],
      [{ text: '4500', callback_data: '17_3' }],
      [{ text: '6000', callback_data: '17_4' }]
    ],
    type: 'vars',
  },
  {
    title:'Сколько карточек можно разместить в формате показа рекламы “кольцевая галерея”?',
    vars: [
      [{ text: 'до 4 шт.', callback_data: '18_1' }],
      [{ text: 'до 6 шт. ', callback_data: '18_3' }],
      [{ text: 'до 10 шт. ', callback_data: '18_4' }],
      [{ text: 'до 5 шт. ', callback_data: '18_2' }]
    ],
    type: 'vars',
  },{
    title:'Какой на ваш взгляд блок в тексте рекламы самый важный?',
    vars: [
      [{ text: 'Доказательства того, что ваш продукт действительно работает.', callback_data: '19_3' }],
      [{ text: 'Для кого это подойдет', callback_data: '19_2' }],
      [{ text: 'Выгоды', callback_data: '19_4' }],
      [{ text: 'Призыв к действию', callback_data: '19_0' }]
    ],
    type: 'vars',
  },{
    title:'Сколько % текста разрешено размещать на изображении - рекламном баннере в Instagram?',
    vars: [
      [{ text: '30%', callback_data: '20_0' }],
      [{ text: '10%', callback_data: '20_1' }],
      [{ text: '20%', callback_data: '20_4' }],
      [{ text: '15%', callback_data: '20_3' }]
    ],
    type: 'vars',
  },{
    title:'Сколько времени может длиться реклама в Instagram Stories?',
    vars: [
      [{ text: 'до 15 сек', callback_data: '21_1' }],
      [{ text: 'до 30 сек', callback_data: '21_2' }],
      [{ text: 'до 1 мин', callback_data: '21_3' }],
      [{ text: 'до 2 мин', callback_data: '21_4' }]
    ],
    type: 'vars',
  },{
    title:'В рекламе за конверсии, какую из страниц нужно указать в качестве страницы совершения конверсии?',
    vars: [
      [{ text: 'страница на которую льется трафик\n', callback_data: '22_2' }],
      [{ text: 'страница на которой установлен Facebook Pixel', callback_data: '22_3' }],
      [{ text: 'страница благодарности - показывается после страницы на которую льется трафик', callback_data: '22_2' }],
      [{ text: 'Страница на которой, после проверки, Facebook Fixel Helper - горит зеленым цветом', callback_data: '22_2' }]
    ],
    type: 'vars',
  },{
    title:'Куда нужно установить код facebook pixel на странице?',
    vars: [
      [{ text: '<head>', callback_data: '23_4' }],
      [{ text: '<body>', callback_data: '23_2' }],
      [{ text: 'перед открывающимся тегом <head>', callback_data: '23_0' }],
      [{ text: 'коды Facebook Pixel размещаются внутри кабинета и не требуют установки на сайт', callback_data: '23_0' }]
    ],
    type: 'vars',
  },{
    title:'Настроем сплит-тест в Google Analytics. Тестируются 3 лендинга.\n' +
      'Сколько переходов с рекламы вы сделаете для того, чтобы точно определить, какой из лендингов работает лучше:',
    vars: [
      [{ text: '300 переходов', callback_data: '24_1' }],
      [{ text: '1500 переходов', callback_data: '24_2' }],
      [{ text: '3000 переходов', callback_data: '24_3' }],
      [{ text: '30000 переходов', callback_data: '24_4' }]
    ],
    type: 'vars',
  },{
    title:'Сколько дней рекомендовано проводить сплит-тестирование лендингов?',
    vars: [
      [{ text: '3 дня', callback_data: '25_0' }],
      [{ text: '5 дней', callback_data: '25_2' }],
      [{ text: '7 дней', callback_data: '25_4' }],
      [{ text: '1 месяц', callback_data: '25_3' }]
    ],
    type: 'vars',
  },{
    title:'Укажите несуществующую переменную в UTM - метках',
    vars: [
      [{ text: 'utm - source', callback_data: '26_0' }],
      [{ text: 'utm-term', callback_data: '26_0' }],
      [{ text: 'utm-content', callback_data: '26_0' }],
      [{ text: 'utm-special', callback_data: '26_4' }]
    ],
    type: 'vars',
  },{
    title:'Сколько utm меток может распознать Google Analytics?',
    vars: [
      [{ text: '3', callback_data: '27_2' }],
      [{ text: '4', callback_data: '27_3' }],
      [{ text: '5', callback_data: '27_4' }],
      [{ text: '6', callback_data: '27_0' }]
    ],
    type: 'vars',
  },














];

module.exports = questions;
