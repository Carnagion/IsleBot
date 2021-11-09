//Slash Command builder
const { SlashCommandBuilder } = require("@discordjs/builders");

//Slash Command
const data = new SlashCommandBuilder();
data.setName("help");
data.setDescription("Shows available commands!");

//Pretend this works because i dont know if this works
const execute = async function(interaction)
{
  await interaction.reply({
        content: `All available commands: /help - Shows available commands! \n /roll - Rolls a random number between 0-100, both inclusive. \n /timecheck - Shows the current time in isleward. \n This bot is not complete, feel free to pull request on https://github.com/Carnagion/IsleBot`
  });
}  

//i forgor what this 💀 
module.exports =
{
    data,
    execute,
}
