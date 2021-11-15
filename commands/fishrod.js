const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("fishrod");
data.setDescription("Find out where to obtain a fishing rod.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: "A competition fishing rod can be obtained for free from **Angler Nayla**. She appears to the right of the bridge that leads to Fjolgard, just above Thumper's cave.\
        \nAlternatively, a fishing rod can be bought from the **Hermit**.",
    });
}

module.exports =
{
    data,
    execute,
}