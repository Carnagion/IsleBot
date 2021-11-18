const { SlashCommandBuilder } = require("@discordjs/builders");
const { roles } = require("../constants.json");

const data = new SlashCommandBuilder();
data.setName("roles");
data.setDescription("A brief explanation of the roles in the server.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: roles,
        ephemeral: true,
    });
}

module.exports =
{
    data,
    execute,
}