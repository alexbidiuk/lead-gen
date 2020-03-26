const secrets = require('../secrets.js');
module.exports = {
  "development": {
    "telegramBotToken": secrets.get('botToken'),
    "googleSheetsCreds": secrets.get('googlesheetcreds')
  },
  "production": {
    "telegramBotToken": secrets.get('botToken'),
    "googleSheetsCreds": secrets.get('googlesheetcreds')
  }
};
