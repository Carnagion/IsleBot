const { SlashCommandBuilder } = require("@discordjs/builders");
const { fishingrod } = require("../constants.json");

const data = new SlashCommandBuilder();
data.setName("fishrod");
data.setDescription("Find out where to obtain a fishing rod.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: fishingrod,
        ephemeral: true,
    });
}

module.exports =
{
    data,
    execute,
}