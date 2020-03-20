const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
var prefix = "*"; 
bot.login(process.env.TOKEN); 
bot.on("ready", () => { console.log("Je suis prêt !"); 
});


bot.on('message', message => {
  
  if (message.content === 'ping') {
    
    message.channel.send('pong');
  }
});

bot.login(proess.env.TOKEN);
