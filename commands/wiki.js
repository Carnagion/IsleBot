const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("wiki");
data.setDescription("Gives information about the iwd wiki");

const execute = async function(interaction)
{
    await interaction.reply({
        content: "Need help in isleward? visit the wiki (https://wiki.isleward.com/Main_Page) for informations and tips! :D. \nThe wiki has some guides for **Begginers** and **Advanced** players too.",
    });
}

module.exports =
{
    data,
    execute,
}
