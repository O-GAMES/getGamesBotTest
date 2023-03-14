const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

// make new bot
const bot = new Telegraf("6207863211:AAGx9L1MYsJhOxLXoQ8hxV76SL3zI2YgNNU");

bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// , {source: "../1.png"} 

bot.command('gg', ctx =>{


bot.telegram.sendPhoto(ctx.chat.id, {source: "src/Screenshot from 2023-02-28 17-15-30.png"});

})

bot.launch();
// Enable graceful stopd 
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
