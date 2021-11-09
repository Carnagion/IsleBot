// credit to Mclnoot for the idea

const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("time");
data.setDescription("Shows the current date and time in IsleWard.");

const execute = async function(interaction)
{
    let timestamp = Date.now();
    let date = new Date(timestamp);
    await interaction.reply({
        content: `The current server date and time is ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}.`,
        ephemeral: true,
    });
}

module.exports =
{
    data,
    execute,
}
