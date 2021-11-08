const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("roll");
data.setDescription("Roll a random number between 0-100, both inclusive.");

const execute = async function(interaction)
{
    let random = Math.round(Math.random() * 100);
    await interaction.reply({
        content: `${interaction.member.displayName} rolled ${random}`,
        ephemeral: true,
    });
}

module.exports =
{
    data,
    execute,
}