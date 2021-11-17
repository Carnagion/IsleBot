//this new json feature is bussin'. Respectfully
const { similarity } = require("../utility/helper/similarity.js");
const { herbs } = require("../constants.json");

const keywords = [
    ["gold", "golds"],
    ["find", "get"],
    ["how", "what"],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: gold,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}
