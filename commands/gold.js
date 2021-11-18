const { SlashCommandBuilder } = require("@discordjs/builders");
const { gold } = require("../constants.json");

const data = new SlashCommandBuilder();
data.setName("gold");
data.setDescription("Find out more about gold.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: gold,
        ephemeral: true,
    });
}

module.exports =
{
    data,
    execute,
}