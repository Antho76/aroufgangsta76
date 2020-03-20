const Discord = require('discord.js'); 
const client = new Discord.Client(); 
var prefix = "*"; 
client.login("Njg5ODEwMzQ5NDk0MzcwMzMy.XnSlzQ.byowPbf_DblFeJFzwYeHzLc1nTg"); 
client.on("ready", () => { //Signifie que le bot à bien démarré console.log("Je suis prêt !"); 
});


client.on('message', message => {
  
  if (message.content === 'ping') {
    
    message.channel.send('pong');
  }
});

client.login('Njg5ODEwMzQ5NDk0MzcwMzMy.XnSlzQ.byowPbf_DblFeJFzwYeHzLc1nTg');
