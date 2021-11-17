const { SlashCommandBuilder } = require("@discordjs/builders");
const { herbs } = require("../constants.json");

const data = new SlashCommandBuilder();
data.setName("herbs");
data.setDescription("Find out how to find and harvest herbs.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: herbs,
    });
}

module.exports =
{
    data,
    execute,
}