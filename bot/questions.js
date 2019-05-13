// Array of objects
// structure:
//        title - The main body of the question
//        vars - Array of objects - The variants to be displayed like a keyboard:
//            text - button text
//            callback_data - the data to be received
//                when user clicks on button ( example: '0_0' , the number before "_" - it's index of answer, after - question weight)
//        type - type of the questions (open or vars)
//        userField - filed of user to modify


const questions = [
  {
    title:'Вы готовы ?',
    vars: [
      [{ text: 'Да', callback_data: '0_0' }],
    ],
    type: 'vars',
    ignore: true
  },
  {
    title:'Введите Ваше имя.',
    userField: 'name',
    type: 'open'
  },
  {
    title:'Введите Ваш телефон в формате +380 или 380.',
    userField: 'phone',
    type: 'open'
  },
  {
    title:'Введите Ваш город.',
    userField: 'city',
    type: 'open'
  },
  {
    title:'Откуда вы берете информацию для настройки таргетинга ? \n \n' +
      '1. Прошу у клиента / Своего Project-manager-а \n' +
      '2. Из головы — я все знаю, мне не нужна дополнительная информация \n' +
      '3. Гуглю, ищу в YouTube похожие кейсы \n' +
      '4. Изучаю конкурентов, на которые ссылается клиент \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_4' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_2' },
      { text: '4️⃣', callback_data: '4_3' }]
    ],
    type: 'vars',
  },
  {
    title:'Легко ли вы обучаетесь новому: \n \n' +
      '1. Заставляю себя, понимаю, что надо \n' +
      '2. Легко и с удовольствием \n' +
      '3. Все, что надо, я уже знаю \n' +
      '4. Нужная информация находит меня сама в процессе работы \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_3' },
      { text: '2️⃣', callback_data: '2_4' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_2' }]
    ],
    type: 'vars',
  },
  {
    title:'Клиент говорит, что у вас ошибки в таргетинге. Ваши действия ? \n \n' +
      '1. На мне ответственность - значит за мною решения \n' +
      '2. Я сам все знаю Это их проблема \n' +
      '3. Выделю время, чтобы проанализировать что может быть не так \n' +
      '4. Стану более внимательно настраивать таргетинг \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_1' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_2' }]
    ],
    type: 'vars',
  },
  {
    title:'Готовы ли вы признавать свои ошибки? \n \n' +
      '1. Да, если убедят меня, что я неправ \n' +
      '2. Да, без лишних объяснений (легко) \n' +
      '3. Нет, если я что-то решил, то только так и правильно \n' +
      '4. Готов, но мне это неприятно \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_4' },
      { text: '2️⃣', callback_data: '2_1' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_3' }]
    ],
    type: 'vars',
  },
  {
    title:'Вы получили техническое задание на настройку рекламы.\n' +
      'У клиента/Project-manager - a четкие требования, но у вас есть идея, которая им не соответствует.\n' +
      'Как вы поступите: \n \n' +
      '1. Обсужу идею с клиентом и предложу протестировать \n' +
      '2. Задание есть задание, а мои идеи не повод от него отклоняться \n' +
      '3. Без ведома клиента сделаю настройку и запущу. Если получится хороший результат - расскажу \n' +
      '4. Буду настраивать так, как вижу. Что клиент понимает в таргетинге \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_4' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_1' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },
  {
    title:'Где находится база лидов, которые были собраны через лид форму? \n \n' +
      '1. В Ads Manager в разделе “Аудитория" \n' +
      '2. В “Инструментах для публикаций” публичной страницы \n' +
      '3. В Business Manager в меню “Источники данных” \n' +
      '4. В Ads Manager в разделе “Каталоги” \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_1' },
      { text: '2️⃣', callback_data: '2_4' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'На каком уровне аккаунта находится выбор плейсментов для размещения рекламы? \n \n' +
      '1. Только на уровне кампаний \n' +
      '2. На уровне кампаний и на уровне групп объявлений \n' +
      '3. Только на уровне групп объявлений \n' +
      '4. На уровне обзора рекламного кабинета \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_1' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Какую индивидуализированную аудиторию нельзя создать? \n \n' +
      '1. Посетители страницы \n' +
      '2. Просматривали видео \n' +
      '3. Видели рекламу \n' +
      '4. Взаимодействовали с моей публичной страницей \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'На каком уровне аккаунта можно задавать цели рекламы на Facebook? \n \n' +
      '1. Только на уровне кампаний \n' +
      '2. На уровне рекламных объявлений \n' +
      '3. На уровне групп объявлений и на уровне кампаний \n' +
      '4. Только на уровне групп объявлений \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_4' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Какую цель рекламной кампании необходимо выбрать для сбора лидов на лид форму? \n \n' +
      '1. Цель “Конверсии” \n' +
      '2. Цель “Вовлеченность” \n' +
      '3. Цель “Генерация лидов” \n' +
      '4. Цель “Трафик”',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Какие дополнительные рекламные цели кампании важны, если Вы хотите чтобы о Вашей компании узнало, как можно больше людей? \n \n' +
      '1. Конверсии \n' +
      '2. Узнаваемость бренда и охват \n' +
      '3. Вовлеченность и трафик \n' +
      '4. Охват и просмотры видео \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_2' },
      { text: '2️⃣', callback_data: '2_4' }],
      [{ text: '3️⃣', callback_data: '3_1' },
      { text: '4️⃣', callback_data: '4_3' }]
    ],
    type: 'vars',
  },{
    title:'Какую цель рекламной кампании необходимо выбрать для сбора регистраций на лендинге? \n \n' +
      '1. Цель “Конверсии” \n' +
      '2. Цель “Вовлеченность” \n' +
      '3. Цель “Генерация лидов” \n' +
      '4. Цель “Трафик” \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_4' },
      { text: '2️⃣', callback_data: '2_1' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_2' }]
    ],
    type: 'vars',
  },{
    title:'Выберите максимальный размер Lookalike аудитории от общего населения страны, предлагаемый стандартными средствами Фейсбук \n \n' +
      '1. 1% \n' +
      '2. 5% \n' +
      '3. 10% \n' +
      '4. 15% \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_1' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Какой показатель отвечает за стоимость 1000 показов рекламного объявления? \n \n' +
      '1. CPA \n' +
      '2. CPC \n' +
      '3. CTR \n' +
      '4. CPM \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_4' }]
    ],
    type: 'vars',
  },{
    title:'Какое максимальное допустимое  количество объявлений в рекламном кабинете? \n \n' +
      '1. 3500 \n' +
      '2. 3000 \n' +
      '3. 4500 \n' +
      '4. 6000 \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_2' },
      { text: '2️⃣', callback_data: '2_1' }],
      [{ text: '3️⃣', callback_data: '3_3' },
      { text: '4️⃣', callback_data: '4_4' }]
    ],
    type: 'vars',
  },
  {
    title:'Сколько карточек можно разместить в формате показа рекламы “кольцевая галерея”? \n \n' +
      '1. До 4 шт. \n' +
      '2. До 6 шт. \n' +
      '3. До 10 шт. \n' +
      '4. До 5 шт. \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_1' },
      { text: '2️⃣', callback_data: '2_3' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_2' }]
    ],
    type: 'vars',
  },{
    title:'Какой на ваш взгляд блок в тексте рекламы самый важный? \n \n' +
      '1. Доказательства того, что ваш продукт действительно работает \n' +
      '2. Для кого это подойдет \n' +
      '3. Выгоды \n' +
      '4. Призыв к действию \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_3' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Сколько % текста разрешено размещать на изображении - рекламном баннере в Instagram? \n \n' +
      '1. 30% \n' +
      '2. 10% \n' +
      '3. 20% \n' +
      '4. 15% \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_1' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_3' }]
    ],
    type: 'vars',
  },{
    title:'Сколько времени может длиться реклама в Instagram Stories? \n \n' +
      '1. до 15 сек \n' +
      '2. до 30 сек \n' +
      '3. до 1 мин \n' +
      '4. до 2 мин \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_1' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_3' },
      { text: '4️⃣', callback_data: '4_4' }]
    ],
    type: 'vars',
  },{
    title:'В рекламе за конверсии, какую из страниц нужно указать в качестве страницы совершения конверсии? \n \n' +
      '1. Страница на которую льется трафик \n' +
      '2. Страница на которой установлен Facebook Pixel \n' +
      '3. Страница благодарности - показывается после страницы на которую льется трафик \n' +
      '4. Страница на которой, после проверки, Facebook Fixel Helper - горит зеленым цветом \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Куда нужно установить код facebook pixel на странице? \n \n' +
      '1. <head> \n' +
      '2. <body> \n' +
      '3. перед открывающимся тегом <head> \n' +
      '4. коды Facebook Pixel размещаются внутри кабинета и не требуют установки на сайт \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_4' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },{
    title:'Настроем сплит-тест в Google Analytics. Тестируются 3 лендинга.\n' +
      'Сколько переходов с рекламы вы сделаете для того, чтобы точно определить, какой из лендингов работает лучше: \n \n' +
      '1. 300 переходов \n' +
      '2. 1500 переходов \n' +
      '3. 3000 переходов \n' +
      '4. 30000 переходов \n',
    vars: [
      [{ text: '1️⃣',  callback_data: '1_1' },
      { text: '2️⃣',  callback_data: '2_2' }],
      [{ text: '3️⃣',  callback_data: '3_3' },
      { text: '4️⃣',  callback_data: '4_4' }]
    ],
    type: 'vars',
  },{
    title:'Сколько дней рекомендовано проводить сплит-тестирование лендингов? \n \n' +
      '1. 3 дня \n' +
      '2. 5 дней \n' +
      '3. 7 дней \n' +
      '4. 1 месяц \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_2' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_3' }]
    ],
    type: 'vars',
  },{
    title:'Укажите несуществующую переменную в UTM - метках \n \n' +
      '1. utm - source \n' +
      '2. utm-term \n' +
      '3. utm-content \n' +
      '4. utm-special \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_0' },
      { text: '2️⃣', callback_data: '2_0' }],
      [{ text: '3️⃣', callback_data: '3_0' },
      { text: '4️⃣', callback_data: '4_4' }]
    ],
    type: 'vars',
  },{
    title:'Сколько utm меток может распознать Google Analytics? \n \n' +
      '1. 3 \n' +
      '2. 4 \n' +
      '3. 5 \n' +
      '4. 6 \n',
    vars: [
      [{ text: '1️⃣', callback_data: '1_2' },
      { text: '2️⃣', callback_data: '2_3' }],
      [{ text: '3️⃣', callback_data: '3_4' },
      { text: '4️⃣', callback_data: '4_0' }]
    ],
    type: 'vars',
  },














];

module.exports = questions;
