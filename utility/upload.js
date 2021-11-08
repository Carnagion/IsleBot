const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const filesystem = require("fs");

const upload = function()
{
    let commands = [];
    let paths = filesystem.readdirSync("./commands").filter(path => path.endsWith(".js"));
    for (let path of paths)
    {
        let command = require(`../commands/${path}`);
        commands.push(command.data.toJSON());
    }

    let rest = new REST({
        version: "9",
    });
    rest.setToken(process.env.TOKEN);
    (async() => {
        try
        {
            console.log("\nUploading commands... ");
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD),
                {
                    body: commands,
                });
            console.log("Successfully uploaded commands.");
        }
        catch (error)
        {
            console.log("Failed to upload commands due to error.");
            console.error(error);
        }
    })();
}

module.exports = 
{
    upload,
}