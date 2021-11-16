const filesystem = require("fs");
const { Collection } = require("discord.js");
const { bot } = require("./login.js");

const intercept = function()
{
    bot.phrases = new Collection();
    let phraseFiles = filesystem.readdirSync("./phrases").filter(filePath => filePath.endsWith(".js"));
    for (let filePath of phraseFiles)
    {
        let phrase = require(`../phrases/${filePath}`);
        bot.phrases.set(phrase.keywords[0][0], phrase);
    }

    bot.on("messageCreate", async(message) => {
        if (message.member.user.bot)
        {
            return;
        }

        try
        {
            let words = message.content.split(" ").map(word => word.toLowerCase());
            for (let phrase of bot.phrases.values())
            {
                if (!message.content.toLowerCase().includes(phrase.keywords[0][0]))
                {
                    continue;
                }
                if (!phrase.match(words))
                {
                    continue;
                }
                phrase.respond(message);
            }
        }
        catch (error)
        {
            console.error(error);
        }
    });
}

module.exports =
{
    intercept,
};