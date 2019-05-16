process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const questions = require('./questions');
const users = require('./users');
const startGoogleWriteProcess = require('../google/spreadsheets');

const startBot = () => {
  const token = global.gConfig.telegramBotToken;
  const bot = new TelegramBot(token, {polling: true});

  bot.on('polling_error', (error) => {
    console.log(error);
  });

  const isOpenFieldValid = (field, value) => {
    switch (field) {
      case 'name':
        return /^[a-zA-Zа-яА-ЯёЁіїІЇ'][a-zA-Z-а-яА-ЯёЁіїІЇ' ]+[a-zA-Zа-яА-ЯёЁіїІЇ']?$/.test(value);
      case 'city':
        return /^[a-zA-Zа-яА-ЯёЁіїІЇ'][a-zA-Z-а-яА-ЯёЁіїІЇ' ]+[a-zA-Zа-яА-ЯёЁіїІЇ']?$/.test(value);
      case 'phone':
        return /^\+?3?8?(0\d{9})$/.test(value);
    }
  };

  const calculateTotal = (userId) => {
    return users[userId].answers.reduce((total, mark) => {
     if (mark === null) return total;
     return +mark + total;
    }, 0);
  };

  const removeKeyboard = (chatId, messageId, messageText, userAnswer) => {
    bot.editMessageText(
      messageText + (userAnswer ? ('\n \n' + 'Вы выбрали: ' + userAnswer) : ''),
      {
        message_id: messageId,
        chat_id: chatId,
        reply_markup: {
          inline_keyboard: []
        },
      })
  };

  const formKeyboardOptions = (parseMode, inlineKeyboard, additionalProps) => ({
    reply_markup: JSON.stringify({
      inline_keyboard: inlineKeyboard ? inlineKeyboard : [],
      parse_mode: parseMode,
    }),
    ...additionalProps
  });

  const endTesting = (userId) => {
    users[userId].endTime = new Date().toUTCString();
    const total = calculateTotal(userId);
    const dataToWrite = {
      name: users[userId].meta.name,
      city: users[userId].meta.city,
      phone: users[userId].meta.phone,
      mark: total,
      startTime: users[userId].startTime,
      endTime: users[userId].endTime,
    };
    const finalMessage = getFinalMessage(total);
    startGoogleWriteProcess(dataToWrite);
    bot.sendMessage(userId, finalMessage.text, {parse_mode: 'markdown'});
    bot.sendMessage(userId, '↘️', formKeyboardOptions('markdown', [[finalMessage.button]]));
    delete users[userId];
  };

  const getFinalMessage = (total) => {
    let text = "";
    let button = {
      text: 'присоединиться',
      url: 'google.com'
    };
    if (0 <= total && total <= 49) {
      text = text +
        `*-Вы набрали "${total} из 100" баллов.* \n` +
        "*Все плохо.*\n" +
        "Ваши шансы получить работу или заказ крайне малы.\n" +
        "Только 1 из 20 согласятся дать вам шанс сделать для них хоть что-то и бесплатно. Но надежда есть!\n" +
        "Нужно срочно пополнить арсенал знаний. \n \n" +
        "Вы молодец, что действуете и прошли этот тест. Вот ссылка на телеграм канал. \n" +
        "Там вы узнаете, что работает в маркетинге. 80% постов – это результаты тестов. \n" +
        "Мы за деньги проверяем, что работает в трафике и воронках продаж. Для вас это все бесплатно. \n";
        button.url = 'https://t.me/Leadgenstudio';
    } else if (50 <= total && total <= 69) {
      text = text +
        `*-Вы набрали "${total} из 100" баллов.* \n` +
        "Неплохой результат, за такие знания готовы платить на начальном уровне.\n" +
        "Шанс найти работу или заказчика есть, но все еще низок. 1 из 10 согласится дать тестовое задание чтобы проверить навыки на деле.\n" +
        "Нужно больше внимания уделить проф навыкам.\n \n" +
        "Вы молодец, что действуете и прошли этот тест. Вот ссылка на телеграм канал.\n" +
        "Там вы узнаете, что работает в маркетинге. 80% постов – это результаты тестов.\n" +
        "Мы за деньги проверяем, что работает в трафике и воронках продаж. Для вас это все бесплатно.\n";
        button.url = 'https://t.me/Leadgenstudio';
    } else if (70 <= total && total <= 80) {
      text = text +
        `*-Вы набрали "${total} из 100" баллов.* \n` +
        "Хороший результат, и вы можете лучше! \n" +
        "За ваши знания и навыки готовы платить хорошие деньги. И это вряд ли вас устраивает.\n" +
        "Вы знаете что есть специалисты лучше, а подрастающее поколение зубами готово вырывать клиентов и предлагает смелые решения.\n" +
        "Невозможно оставаться на одном месте.\n" +
        "Вы либо развиваетесь и получаете дивиденды в виде денег/путешествий/впиши свое ______ либо деградируете и уступаете место сильнейшим. \n \n" +
        "Вы молодец, что действуете и прошли этот тест. Вот ссылка на телеграм канал.\n" +
        "Там вы узнаете, что работает в маркетинге. 80% постов – это результаты тестов.\n" +
        "Мы за деньги проверяем, что работает в трафике и воронках продаж. Для вас это все бесплатно.\n";
        button.url = 'https://t.me/Leadgenstudio';
    } else if (81 <= total && total <= 100) {
      text = text +
        `*-Вы набрали "${total} из 100" баллов.* \n \n` +
        "Вау! Твой уровень навыков высок. Но, как они работают на практике.\n" +
        "Хочешь реально проверить себя на прочность? Предлагаем сделать короткое тестовое задание по настройке таргета в FB.\n" +
        "Лучшего ждет сюрприз - возможность пройти стажировку на 1 неделю в команде профессионалов.\n" +
        "Мы поделимся своими наработками а ты прокачать свои скилы.\n" +
        "Интересно? Тогда жми на кнопку, чтоб узнать детали!\n";
        button.url = 'https://www.work.ua/jobs/3474757/';
        button.text = 'узнать';
    }
    return {
      text,
      button
    };
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
      options = formKeyboardOptions('Markdown', questionVars, {});
    }
    bot.sendMessage(chatId, text, options);
  }



  bot.onText(/\/start/, function (msg, match) {
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    users[chatId] = {
      answers: [],
      meta: {},
      startTime: new Date().toUTCString()
    };
    sendQuestion(0, msg);
  });

  bot.on('message', function (msg, match) {
    if (msg.entities && msg.entities.filter(entity => entity.type === 'bot_command').length > 0) return;
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    if (users[chatId]) {
      let currQuestionIdx = users[chatId].currQuestionIdx;
      const currQuestion = questions[currQuestionIdx];
      if (currQuestion.type === 'open') {
        if(isOpenFieldValid(currQuestion.userField, msg.text)) {
          users[chatId].meta[currQuestion.userField] = msg.text;
          currQuestionIdx++;
          sendQuestion(currQuestionIdx, msg);
        } else {
          let text = "Вы ввели некорректные данные. Попробуйте еще раз.";
          bot.sendMessage(chatId, text).then(() => {
            sendQuestion(currQuestionIdx, msg);
          })
        }
      }
    }
  });


  bot.on('callback_query', function (msg) {
    let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    const messageId = msg.message.message_id;
    const messageText = msg.message.text;
    let answer = msg.data.split('_');
    if (!users[chatId]) {
      let text = "Извините, во время работы бота пошло что-то не так и мы потеряли Ваши данные, пройдите тест еще раз, спасибо."
      bot.sendMessage(chatId, text);
      return;
    }
    let questionIdx = users[chatId].currQuestionIdx;
    let question = questions[questionIdx];
    if (!question.ignore) {
      let userAnswerWeight = answer[1];
      setUserQuestionAnswerWeight(chatId, questionIdx, userAnswerWeight);
    }
    questionIdx++;
    removeKeyboard(chatId, messageId, messageText, question.ignore ? null : answer[0]);
    if (questions.length === questionIdx) {
      endTesting(chatId);
      return;
    }

    sendQuestion(questionIdx, msg);
  });
};

module.exports = startBot;
