const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("help");
data.setDescription("Shows available commands!");

const execute = async function(interaction)
{
  await interaction.reply({
        content: `All available commands:\n/help - Shows available commands!\n/roll - Rolls a random number between 0-100, both inclusive.\n/timecheck - Shows the current time in isleward.\nThis bot is not complete, feel free to contribute by creating a pull request on https://github.com/Carnagion/IsleBot :D`,
  });
}  

module.exports =
{
    data,
    execute,
}
