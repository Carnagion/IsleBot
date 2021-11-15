const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("herbs");
data.setDescription("Find out how to find and harvest herbs.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: "Herbs can be found scattered on the ground all around **Fjolarok** and **Fjolgard**. They can be picked up by standing over them and pressing either `U` or `G`.\
        \nPressing `V` to toggle nameplates can help find them more easily if you aren't used to what they look like.",
    });
}

module.exports =
{
    data,
    execute,
}