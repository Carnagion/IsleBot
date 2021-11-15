// credit to Mclnoot

const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("help");
data.setDescription("Get information about available commands.");

const execute = async function(interaction)
{
  await interaction.reply({
        content: "All available commands:\
        \n`/help` - Get information about available commands.\
        \n`/roll` - Rolls a random number between 0-100, both inclusive.\
        \n`/time` - Shows the current time in isleward.\
        \n`/fishrod` - Find out where to obtain a fishing rod.\
        \n`/herbs` - Find out how to find and harvest herbs.\
        \nThis bot is not complete. Feel free to contribute by creating a pull request on https://github.com/Carnagion/IsleBot. :D",
  });
}  

module.exports =
{
    data,
    execute,
}