const filesystem = require("fs");
const { Collection } = require("discord.js");
const { bot } = require("./login.js");
const { averagelengthsum } = require("../utility/helper/similarity.js");

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
            let content = message.content.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"").trim();
            let words = content.split(" ");
            for (let phrase of bot.phrases.values())
            {
                let match = false;
                for (let keyword of phrase.keywords[0])
                {
                    if (content.includes(keyword))
                    {
                        match = true;
                        break;
                    }
                }
                if (!match)
                {
                    continue;
                }
                
                if (content.length >= 5 * averagelengthsum(phrase.keywords))
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