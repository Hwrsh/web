const fs = require('fs');
const prompt = require('prompt');
const login = require('fca-unofficial');
const chalk = require('chalk');

prompt.start();

prompt.get(['appstatePath', 'targetID', 'timer', 'word', 'messagesPath'], function (err, result) {
  if (err) { return onErr(err); }

  const appState = JSON.parse(fs.readFileSync(result.appstatePath, 'utf8'));
  const messages = fs.readFileSync(result.messagesPath, 'utf8').split('\n');
  let currentIndex = 0;
  
  login({ appState }, (err, api) => {
    if (err) return console.error(err);

    setInterval(() => {
      const message = messages[currentIndex].trim();
      const messageWithWord = `${result.word} ${message}`;

      api.sendMessage(messageWithWord, result.targetID, () => {
        console.log(chalk.bold.hex('#00FF00').bold(`Successful Sent : ${messageWithWord}`));
        currentIndex = (currentIndex + 1) % messages.length;
      });

    }, `${result.timer}000`);
  });
});

function onErr(err) {
  console.log(err);
  return 1;
}
process.on('unhandledRejection', (err, p) => {});