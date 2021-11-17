const { similarity } = require("../utility/helper/similarity.js");
const { herbs } = require("../constants.json");

const keywords = [
    ["herb", "herbs"],
    ["gather", "harvest", "find", "get"],
    ["how", "where", "what"],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: herbs,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}