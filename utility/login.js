const { Client, Intents } = require("discord.js");

const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

const login = function()
{
    try
    {
        bot.once("ready", () => {
            console.log("IsleBot is ready.");
        });
        bot.login(process.env.TOKEN);
    }
    catch (error)
    {
        console.log("Unable to log in due to an error.");
        console.error(error);
    }
}

module.exports =
{
    bot,
    login,
}