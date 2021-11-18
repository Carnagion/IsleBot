// credit to Mclnoot

const { SlashCommandBuilder } = require("@discordjs/builders");
const { bot } = require("../utility/login.js");

const data = new SlashCommandBuilder();
data.setName("help");
data.setDescription("Get information about available commands.");

const execute = async function(interaction)
{
	let message = "Here are all the commands you can use:";
	for (let command of bot.commands.values())
	{
		message += `\n\`/${command.data.name}\` - ${command.data.description}`;
	}
	await interaction.reply(message);
}

module.exports =
{
    data,
    execute,
}