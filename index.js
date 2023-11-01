
const options = {method: 'POST', headers: {Authorization: '1083600201878605825-8bfb3dc71c1f584fe9e95ce362336dc7f73eddedaec91b87cc4c6072307ac143'}};

fetch('https://api.squarecloud.app/v2/apps/6bd2ff0c5b184bcfbd421c00a4288470/start', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})
console.clear()
client.on('ready', () => {
  console.log(`🔥 Estou online em ${client.user.username}!`)
})


client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)

client.on("interactionCreate", require('./events/consultas').execute);




