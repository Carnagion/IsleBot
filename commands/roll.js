//Slash command builder
const { SlashCommandBuilder } = require("@discordjs/builders");

//Slash command
const data = new SlashCommandBuilder();
data.setName("roll");
data.setDescription("Roll a random number between 0-100, both inclusive.");

//Number generator ( Generates number from 0 - 100 )
const execute = async function(interaction)
{
    let random = Math.round(Math.random() * 100);
    await interaction.reply({
        content: `${interaction.member.displayName} rolled ${random}`,
        ephemeral: true,
    });
}

//execution
module.exports =
{
    data,
    execute,
}
