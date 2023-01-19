const TelegramApi = require('node-telegram-bot-api')

const token = '5976146333:AAFs4OZ_dLAEuYiyI3hgQyRs_5CYAL7vq8M'

const bot = new TelegramApi(token, {polling: true})


let info;
bot.on('message', msg => {
  const text = msg.text;
  const uid = msg.chat.id;
  bot.sendMessage(id, '1')
  console.log(`${msg.from.username}: ${text}`);
  console.log(msg);
})
