// credit to Mclnoot for the idea
// credit to Carnagion for the code

const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("time");
data.setDescription("Shows the current date and time in IsleWard.");

const execute = async function(interaction)
{
    let timestamp = Date.now();
    let date = new Date(timestamp);
    await interaction.reply({
        content: `The current server time is ${date.getHours()}:${date.getMinutes()}.`,
        ephemeral: false,
    });
}

module.exports =
{
    data,
    execute,
}
