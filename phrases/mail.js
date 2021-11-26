const { similarity } = require("../utility/helper/similarity.js");
const { herbs } = require("../constants.json");

const keywords = [
    ["mails", "mail", "mailbox"],
    ["open", "access", "is", "are"],
    ["how", "where",],
];

const match = function(words)
{
    return similarity(words, keywords) >= 2 / 3;
}

const respond = function(message)
{
    message.reply({
        content: mail,
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}
