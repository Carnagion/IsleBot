const filesystem = require("fs");
const { Collection } = require("discord.js");
const { bot } = require("./login.js");

const listen = function()
{
    try
    {
        console.log("\nRegistering commands...");
        bot.commands = new Collection();
        let commandFiles = filesystem.readdirSync("./commands").filter(filePath => filePath.endsWith(".js"));
        for (let filePath of commandFiles)
        {
            let command = require(`../commands/${filePath}`);
            bot.commands.set(command.data.name, command);
        }
        console.log("Successfully registered commands.");
    }
    catch (error)
    {
        console.log("Failed to register commands due to an error.");
        console.error(error);
    }
    
    bot.on("interactionCreate", async(interaction) => {
        if (interaction.member.user.bot)
        {
            return;
        }
        if (!interaction.isCommand())
        {
            return;
        }

        try
        {
            let command = bot.commands.get(interaction.commandName);
            if (command == null)
            {
                return;
            }
            await command.execute(interaction);
        }
        catch (error)
        {
            console.error(error);
            await interaction.reply({
                    content: "Something went wrong while executing that command.",
                    ephemeral: true,
                });
        }
    });
}

module.exports =
{
    listen,
}