//any1 have good wand or neck item to trade? pls (IGN: whentheimpos)
const { similarity } = require("../utility/helper/similarity.js");
const { trade } = require("../constants.json");

const keywords = [
    ["trade", "trading"],
    ["to"],
    ["how"],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: trade,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}