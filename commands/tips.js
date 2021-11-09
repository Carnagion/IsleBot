//Command not finished, need randomizer to randomize content or something idk... i wish this was in discordpy

//Slash Command builder
const { SlashCommandBuilder } = require("@discordjs/builders");

//Slash Command
const data = new SlashCommandBuilder();
data.setName("tips");
data.setDescription("tips and tricks for isleward!");

//Pretend this works because i dont know if this works
const execute = async function(interaction)
{
  await interaction.reply({
        content: `Kill mobs that have the same level as you to level up faster (fishing is also a good way to level up if you have a good rod)`,
  });
}  

//i forgor what this 💀 
module.exports =
{
    data,
    execute,
}
