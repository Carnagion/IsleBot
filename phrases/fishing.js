const { similarity } = require("../utility/helper/similarity.js");

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
        content: "A competition fishing rod can be obtained for free from **Angler Nayla**. She appears to the right of the bridge that leads to Fjolgard, just above Thumper's cave.\
        \nAlternatively, a fishing rod can be bought from the **Hermit**.",
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}
