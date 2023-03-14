const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const { EpicFreeGames } = require('epic-free-games');
const epicFreeGames = new EpicFreeGames({ country: 'US', locale: 'us', includeAll: true })


// make new bot
const bot = new Telegraf("6207863211:AAGx9L1MYsJhOxLXoQ8hxV76SL3zI2YgNNU");

bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// , {source: "../1.png"} 

 epicFreeGames.getGames().then(res => {
    const games = res.currentGames[0].title;

    bot.command('gg', ctx =>{
        bot.telegram.sendPhoto(ctx.chat.id,
            `https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CalloftheSea_OutoftheBlue_S1_2560x1440-204699c6410deef9c18be0ee392f8335?h=480&quality=medium&resize=1&w=854`,
             
            {caption:` #العاب_EpicGames_الأسبوعية 🙂🔥

             • ${games}

            ⭐️ 7.7 | Metacritic`});
        
        })
  }).catch(err => {
    // Do something
  });



bot.launch();
// Enable graceful stopd 
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
