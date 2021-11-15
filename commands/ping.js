//Pretend this works

const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName: ("ping");
data.setDescription: ("Get bot ping");

const execute = async function(interaction)
{
    await interaction.reply({
        content: `Pong!`, //Add how many latncy it has in miliiseconds
        ephemeral: false,
    });
}

module.exports =
{
    data,
    execute,
}
