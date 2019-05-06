const TelegramBot = require('node-telegram-bot-api');
const questions = require('./questions');
const users = require('./users');
const initConfig = require('../config');
const startGoogleWriteProcess = require('../google/spreadsheets');

const startBot = () => {
  initConfig();

  const token = global.gConfig.telegramBotToken;

  const bot = new TelegramBot(token, {polling: true});

  bot.on('polling_error', (error) => {
    console.log(error);  // => 'EFATAL'
  });

  const calculateTotal = (userId) => {
    return users[userId].answers.reduce((total, mark) => {
     if (mark === null) return total;
     return +mark + total;
    }, 0);
  };


  const endTesting = (userId) => {
    const total = calculateTotal(userId);
    const dataToWrite = {
      name: users[userId].meta.name,
      city: users[userId].meta.city,
      phone: users[userId].meta.phone,
      mark: total
    };
    startGoogleWriteProcess(dataToWrite);
    let text;
    if (0 <= total <= 49) {
      text = "Все плохо.\n" +
        "Ваши шансы получить работу или заказ крайне малы.\n" +
        "Только 1 из 20 заказчиков согласится дать вам шанс сделать для него хоть что-то и бесплатно. Но надежда есть!\n" +
        "Нужно серьезно заняться улучшением своих навыков. " +
        "Для этого приглашаем вас на онлайн-встречу по маркетингу, где вы сможете прокачать маркетинговые скиллы полного цикла:\n" +
        "Тестирование спроса/Запуск Воронки продаж/Трафик и масштабирование.\n" +
        "Кликайте по кнопке ниже, чтобы узнать детали встречи и забронировать участие.\n\n" +
        "[Иду на онлайн-встречу](http://www.example.com/)"
    } else if (50 <= total <= 69) {
      text = "Неплохой результат.\n" +
        "За такие знания готовы платить на начальном уровне. Шанс найти работу или заказчика есть, но все еще низок.\n" +
        "1 из 10 заказчиков согласится дать вам тестовое задание, чтобы проверить навыки на деле.\n" +
        "Нужно больше внимания уделить профнавыкам. Для этого приглашаем вас на онлайн-встречу по маркетингу, где вы сможете прокачать маркетинговые скиллы полного цикла:\n" +
        "Тестирование спроса/Запуск Воронки продаж/Трафик и масштабирование.\n" +
        "Кликайте по кнопке ниже, чтобы узнать детали встречи и забронировать участие.\n\n" +
        "[Иду на онлайн-встречу](http://www.example.com/)"
    } else if (70 <= total <= 80) {
      text = "Хороший результат, и вы можете лучше!\n" +
        "За ваши знания и навыки готовы платить хорошие деньги. Но это вряд ли вас устраивает.\n" +
        "Вы знаете, что есть специалисты лучше, а подрастающее поколение зубами готово вырывать клиентов и предлагает смелые решения.\n" +
        "Невозможно оставаться на одном уровне.\n" +
        "Вы либо развиваетесь и получаете дивиденды в виде денег/путешествий (впишите свое ______), либо деградируете и уступаете место сильнейшим.\n" +
        "Поэтому мы приглашаем вас на онлайн-встречу по маркетингу, где сможете прокачать маркетинговые скиллы полного цикла:\n" +
        "Тестирование спроса/Запуск Воронки продаж/Трафик и масштабирование.\n" +
        "Кликайте по кнопке ниже, чтобы узнать детали встречи и забронировать участие.\n\n" +
        "[Иду на онлайн-встречу](http://www.example.com/)"
    } else if (81 <= total <= 100) {
      text = "Вау!\n" +
        "Ваш уровень навыков высок.\n" +
        "Но как они работают на практике?\n" +
        "Хотите реально проверить себя на прочность? Предлагаем сделать короткое тестовое задание по настройке таргета в FB.\n" +
        "Лучшего ждет сюрприз - возможность пройти стажировку на 1 неделю в команде профессионалов.\n" +
        "Мы поделимся своими наработками, а вы прокачаете свои скиллы. Интересно?\n\n" +
        "Тогда жмите на кнопку [Тест на прочность!](http://www.example.com/)"
    }
    bot.sendMessage(userId, text, {parse_mode: 'markdown'});
    delete users[userId];
  };


  const setUserQuestionAnswerWeight = (userId, questionIdx, questionAnswerWeight) => {
    if (!users[userId]) {
      let text = "Извините, во время работы бота пошло что-то не так и мы потеряли Ваши данные, пройдите тест еще раз, спасибо."
      bot.sendMessage(userId, text);
      return;
    }
    return users[userId].answers[questionIdx] = questionAnswerWeight;
  };

  const sendQuestion = (questionIndex, msg) => {
    let options = {};
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    let text = questions[questionIndex].title;
    users[chatId].currQuestionIdx = questionIndex;
    if (questions[questionIndex].type === 'open') {
      options = {};
    } else {
      let questionVars = questions[questionIndex].vars;
      options = {
        reply_markup: JSON.stringify({
          inline_keyboard: questionVars,
          parse_mode: 'Markdown'
        })
      };
    }
    bot.sendMessage(chatId, text, options).then(() => {})
  }



  bot.onText(/\/start/, function (msg, match) {
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    users[chatId] = {
      answers: [],
      meta: {},
    };
    sendQuestion(0, msg);
  });

  bot.on('message', function (msg, match) {
    if (msg.entities) return;
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    if (users[chatId]) {
      let currQuestionIdx = users[chatId].currQuestionIdx;
      const currQuestion = questions[currQuestionIdx];
      if (currQuestion.type === 'open') {
        users[chatId].meta[currQuestion.userField] = msg.text;
        currQuestionIdx++;
        sendQuestion(currQuestionIdx, msg);
      }
    }
  });


  bot.on('callback_query', function (msg) {
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    let answer = msg.data.split('_');
    let questionIdx = users[chatId].currQuestionIdx;
    let userAnswerWeight = answer[1];

    setUserQuestionAnswerWeight(chatId, questionIdx, userAnswerWeight);
    questionIdx++;

    if (questions.length === questionIdx) {
      endTesting(chatId);
      return;
    }


    sendQuestion(questionIdx, msg);
  });
};

module.exports = startBot;
