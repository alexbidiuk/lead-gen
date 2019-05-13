const secrets = require('../secrets.js');
console.log(secrets.get('googlesheetcreds'));
module.exports = {
  "development": {
    "telegramBotToken": secrets.get('botToken') || "874855862:AAHraaJS1tkRtmYB-oLqh_uXni5hNWK3Er0",
    "googleSheetsCreds": secrets.get('googlesheetcreds') || '{"installed":{"client_id":"313057394227-cns1kn8lmjt594ufs6v06ulfis2geojd.apps.googleusercontent.com","project_id":"quickstart-1557096596006","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"nZ3x6l7I2cGKxpuCEEwtyK9f","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}'
  },
  "production": {
    "telegramBotToken": secrets.get('botToken') || "877260056:AAGHhdTWamlIKIjc4MsxguiIYds0HHAagfI",
    "googleSheetsCreds": secrets.get('googlesheetcreds') || '{"installed":{"client_id":"90853597180-7lnljsqmspg2tetjbcdochjb3b5br7ec.apps.googleusercontent.com","project_id":"leadgenquiz-1557182193590","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"5bQJndrc6XVuua0Gwpd0QhDG","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}'
  }
};
