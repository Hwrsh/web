const fs = require('fs');
const prompt = require('prompt');
const login = require('fca-unofficial');
const chalk = require('chalk');

prompt.message = '';

console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m██╗░░░██╗██████╗░███╗░░██╗░█████╗░███╗░░░███╗"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m██║░░░██║╚════██╗████╗░██║██╔══██╗████╗░████║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m╚██╗░██╔╝░█████╔╝██╔██╗██║██║░░██║██╔████╔██║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m░╚████╔╝░░╚═══██╗██║╚████║██║░░██║██║╚██╔╝██║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m░░╚██╔╝░░██████╔╝██║░╚███║╚█████╔╝██║░╚═╝░██║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;34m░░░╚═╝░░░╚═════╝░╚═╝░░╚══╝░╚════╝░╚═╝░░░░░╚═╝"));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;31m██████╗░██╗░░░██╗██╗░░░░░██╗░░░░░███████╗██╗░░██╗"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;31m██╔══██╗██║░░░██║██║░░░░░██║░░░░░██╔════╝╚██╗██╔╝"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;31m██████╔╝██║░░░██║██║░░░░░██║░░░░░█████╗░░░╚███╔╝░"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;31m██╔══██╗██║░░░██║██║░░░░░██║░░░░░██╔══╝░░░██╔██╗░"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;31m██║░░██║╚██████╔╝███████╗███████╗███████╗██╔╝╚██╗"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;31m╚═╝░░╚═╝░╚═════╝░╚══════╝╚══════╝╚══════╝╚═╝░░╚═╝"));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;36m----------------------------------------------------------------\n"));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m╔═════════════════════════════════════════════════════════════╗"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97mN4M3    \033[1;91m: \033[1;96mH4RSH SINGH R4JPUT \033[1;97m                              ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97mRULL3X  \033[1;91m: \033[1;96mV3N0M W4NT3D RULL3X  \033[1;97m                            ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97m0WN3R   \033[1;91m: \033[1;96mSIIDDH4RTH R4J  \033[1;97m                                 ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97mFB      \033[1;91m: \033[1;96mhttps://www.facebook.com/your.dad.harsh\033[1;97m          ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97mM3MB3R 1\033[1;91m: \033[1;96m4SHU \033[1;97m                                            ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97mM3MB3R 2\033[1;91m: \033[1;96mS4IY4N                     \033[1;97m                      ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m* \033[1;97mM3MB3R 3\033[1;91m: \033[1;96mRUDR4                                            \033[1;97m║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m║\033[1;93m*\033[1;97m M3MB3R 4\033[1;91m:\033[1;96m 44RIIZ \033[1;97m                                          ║"));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;97m╚═════════════════════════════════════════════════════════════╝"));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold(" "));
console.log(chalk.bold.hex("#00FF00").bold("\033[1;36m----------------------------------------------------------------\n"));

prompt.start();

console.log(chalk.bold.hex("#00FF00").bold(" "));

prompt.get(['datafile', 'targetID', 'timer', 'kidxnam3', 'notepadFile'], function (err, result) {
  if (err) { return onErr(err); }
  console.log(chalk.bold.hex("#00FF00").bold(" "));
  console.log(chalk.bold.hex("#00FF00").bold(" "));

  const appState = JSON.parse(fs.readFileSync(result.datafile, 'utf8'));
  const messages = fs.readFileSync(result.notepadFile, 'utf8').split('\n');
  let currentIndex = 0;
  
  login({ appState }, (err, api) => {
    if (err) return console.error(err);

    setInterval(() => {
      const message = messages[currentIndex].trim();
      const messageWithWord = `${result.kidxnam3} ${message}`;

      api.sendMessage(messageWithWord, result.targetID, () => {
        const now = new Date();
        console.log(chalk.bold.hex("#00FF00").bold(" "));
        console.log(chalk.bold.hex("#00FF00").bold(" "));
        const formattedTime = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });
        console.log(chalk.bold.hex('#00FF00').bold(`--> Your Convo/Inbox Link  :-- ${result.targetID}`));
        console.log(chalk.bold.hex('#00FF00').bold(`--> V3N0M W4NT3D RULL3X H3R3 :D || Date & Time ::- ${formattedTime}`));
        console.log(chalk.bold.hex('#00FF00').bold(`--> Message Successfully Sent By HwRsH Rajput :D ::-->> ${result.kidxnam3} ${message}\n`));
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