const { similarity } = require("../utility/helper/similarity.js");
const { katrien } = require("../constants.json");

const keywords = [
    ["katrien"],
    ["lore"],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: "Katrien lore? hmmm I agree, katrien has some lore hidden" //Note: dont do something like "go over to #fan-lore and discuss it" NO i want to sound it like reddit's automoderator's 'based' phrase
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}
