const similarity = function(words, wordgroups)
{
    let similarity = 0.0;
    let unit = 1 / wordgroups.length;
    for (let word of words)
    {
        for (let wordgroup of wordgroups)
        {
            if (wordgroup.includes(word))
            {
                similarity += unit;
            }
        }
    }
    return similarity;
}

module.exports =
{
    similarity,
}