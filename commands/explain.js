const { SlashCommandBuilder } = require("@discordjs/builders");
const { bot } = require("../utility/login.js");

const data = new SlashCommandBuilder();
data.setName("explain");
data.setDescription("Show a brief explanation of a specified IsleWard mechanic or feature.");
data.addStringOption(option => option.setName("feature").setDescription("The feature to explain.").setRequired(true));

const execute = async function(interaction)
{
    let feature = interaction.options.getString("feature");
    let phrase = bot.phrases.get(feature);
    if (phrase == null)
    {
        await interaction.reply({
            content: "That feature either doesn't exist, or does not have an explanation defined for it.",
            ephemeral: true,
        });
    }
    else
    {
        phrase.respond(interaction);
    }
}

module.exports =
{
    data,
    execute,
}
