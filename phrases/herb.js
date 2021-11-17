const { similarity } = require("../utility/helper/similarity.js");

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
        content: "Herbs can be found scattered on the ground all around **Fjolarok** and **Fjolgard**. They can be picked up by standing over them and pressing either `U` or `G`.\
        \nPressing `V` to toggle nameplates can help find them more easily if you aren't used to what they look like.",
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}