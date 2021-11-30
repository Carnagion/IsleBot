const { similarity } = require("../utility/helper/similarity.js");
const { random } = require("../utility/helper/random.js");

const keywords = [
    ["flabbers"],
];

const match = function(words)
{
    return similarity(words, keywords) == 1.0;
}

const respond = function(message)
{
    let options = ["Did someone say flabbers? :eyes:", "*woof woof*", "*wags tail*", "Here you go. Have a picture of flabbers. Enjoy your day :D"];
    message.reply({
        content: random(options),
        files: ["./images/flabbers.png"],
    });
}

module.exports =
{
    keywords,
    match,
    respond,
}