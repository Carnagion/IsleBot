// credit to Mclnoot for the idea

const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const wiki = require("wikijs").default;
const { JSDOM } = require("jsdom");

const linkSubcommand = new SlashCommandSubcommandBuilder();
linkSubcommand.setName("link");
linkSubcommand.setDescription("Provide a link to the IsleWard wiki.");

const searchSubcommand = new SlashCommandSubcommandBuilder();
searchSubcommand.setName("search");
searchSubcommand.setDescription("Search for an article on the IsleWard wiki.");
searchSubcommand.addStringOption(option => option.setName("title").setDescription("The title of the article to search for.").setRequired(true));
searchSubcommand.addBooleanOption(option => option.setName("firstonly").setDescription("If true, only the first (top) search result is shown.").setRequired(false));

const data = new SlashCommandBuilder();
data.setName("wiki");
data.setDescription("Retrieve information from the IsleWard wiki.");
data.addSubcommand(linkSubcommand);
data.addSubcommand(searchSubcommand);

const execute = async function(interaction)
{
    let subcommand = interaction.options.getSubcommand();
    let isleward = wiki({
        apiUrl: "https://wiki.isleward.com/api.php",
        origin: null,
    });
    switch (subcommand)
    {
        case "link":
            let newsevents = await isleward.page("News & Events");
            let contents = await newsevents.html();
            let dom = new JSDOM(contents);

            let linkEmbed = new MessageEmbed();
            linkEmbed.setTitle("IsleWard Wiki");
            linkEmbed.setURL("https://wiki.isleward.com");
            linkEmbed.setColor("#2d2136");
            linkEmbed.setThumbnail("https://wiki.isleward.com/images/0/0d/Portal1.png");
            linkEmbed.setDescription("The official Isleward Wiki, a player-maintained source of information about the MMO roguelike.");
            linkEmbed.addField("News & Events", `\`\`\`${dom.window.document.querySelector("ul").textContent}\`\`\``, false);
            
            await interaction.reply({
                embeds: [linkEmbed],
            });
            break;

        case "search":
            let title = interaction.options.getString("title");
            let search = await isleward.search(title);
            if (search.results.length == 0)
            {
                await interaction.reply({
                    content: "No pages were found that match the specified title. Perhaps try using a different one.",
                    ephemeral: true,
                });
                return;
            }

            let searchEmbed = new MessageEmbed();
            searchEmbed.setTitle("Search results");
            searchEmbed.setColor("#2d2136");
            searchEmbed.setThumbnail("https://wiki.isleward.com/images/0/0d/Portal1.png");

            let firstonly = interaction.options.getBoolean("firstonly");
            if (firstonly || search.results.length == 1)
            {
                searchEmbed.setDescription(`This is the only search result: https://wiki.isleward.com/${search.results[0].replace(/\s/g, "_")}.\
                \nIf it's not what you expected, consider using a different search keyword or setting \`firstonly\` to false.`);
            }
            else
            {
                searchEmbed.setDescription(`Top search result: https://wiki.isleward.com/${search.results[0].replace(/\s/g, "_")}\
                \nOther potentially relevant results:`);
                for (let index = 1; index < search.results.length; index += 1)
                {
                    searchEmbed.addField(search.results[index], `https://wiki.isleward.com/${search.results[index].replace(/\s/g, "_")}`, true);
                }
            }

            await interaction.reply({
                embeds: [searchEmbed],
            });
            break;

        default:
            await interaction.reply({
                content: "That isn't a valid command. Perhaps try again.",
                ephemeral: true,
            });
    }
}

module.exports =
{
    data,
    execute,
}
