const Discord = require('discord.js'); 
const client = new Discord.Client(); 
var prefix = "*"; 
client.login(process.env.TOKEN); 
client.on("ready", () => { console.log("Je suis prêt !"); 
});


client.on('message', message => {
  
  if (message.content === 'ping') {
    
    message.channel.send('pong');
  }
});

client.login(proess.env.TOKEN);
