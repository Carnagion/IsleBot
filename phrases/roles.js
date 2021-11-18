const { similarity } = require("../utility/helper/similarity.js");
const { roles } = require("../constants.json");

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
        content: roles,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}