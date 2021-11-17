const { similarity } = require("../utility/helper/similarity.js");
const { fishingrod } = require("../constants.json");

const keywords = [
    ["fishing", "fish"],
    ["rod"],
    ["find", "get", "obtain"],
    ["how", "where"],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: fishingrod,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}