const { similarity } = require("../utility/helper/similarity.js");

const keywords = [
    ["roles", "role", "stowaway", "deckhand", "cannoneer", "quartermaster", "captain", "admiral"],
    ["what", "how", "who"],
    ["is", "are", "get", "obtain"],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: "Here is a brief explanation on the roles in this server:\
        \n`Stowaway`: Active players\
        \n`Deckhand`: Even more active and helpful players\
        \n`Cannoneer`: Players who have donated to IsleWard\
        \n`Quartermaster`: Players who support IsleWard on Patreon\
        \n`Captain`: Players who contributed to IsleWard's development\
        \n`Admiral`: Only the coolest of the cool; i.e. the main developers.",
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}