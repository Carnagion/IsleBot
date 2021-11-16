// credit to Mclnoot

const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder();
data.setName("wiki");
data.setDescription("Find out more about the IsleWard wiki.");

const execute = async function(interaction)
{
    await interaction.reply({
        content: "Need help in IsleWard? Visit the **wiki** at https://wiki.isleward.com/Main_Page for more information and tips!\
        \nThe wiki has some guides for both beginners and and advanced players.\
        \n(Psst: the wiki is community-maintained. If you see information that may look outdated or wrong, feel free to create an account and start helping out the community by editing the wiki. Every little bit helps.)",
    });
}

module.exports =
{
    data,
    execute,
}
