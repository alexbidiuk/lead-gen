const {google} = require('googleapis');
const authorize = require('./auth');

const spreadsheetId = '1NSsWPVxsKMfesQAsGnfzeg9hWRL83GBj6NeYfeUt3Vg';
const range = 'Лист1';
const valueInputOption = 'RAW';


const formValuesFromObject = (data) => {
  let values = [];
  // values.push(Object.keys(data));
  values.push(Object.values(data))
  return values;
};

const writeResults = (auth, dataToWrite) => {
  const sheets = google.sheets({version: 'v4', auth});
  let resource = {
    values: formValuesFromObject(dataToWrite),
  };
  sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption,
    resource,
  }, (err, result) => {
    if (err) {
      // Handle error.
      console.log(err);
    } else {
      console.log(`${result.updates.updatedCells} cells appended.`);
    }
  });
};

const startGoogleWriteProcess = (dataToWrite) => {
  authorize((auth) => writeResults(auth, dataToWrite));
};

module.exports = startGoogleWriteProcess;
