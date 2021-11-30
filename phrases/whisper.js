const { similarity } = require("../utility/helper/similarity.js");
const { whisper } = require("../constants.json");

const keywords = [
    ["whisper", "dm"],
    ["to"],
    ["how",],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: whisper,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}
