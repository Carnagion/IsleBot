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

const averagelengthsum = function(wordgroups)
{
    let sum = 0;
    for (let wordgroup of wordgroups)
    {
        let wordaverage = 0;
        for (let word of wordgroup)
        {
            wordaverage += word.length;
        }
        wordaverage /= wordgroup.length;
        sum += wordaverage;
    }
    return sum;
}

module.exports =
{
    similarity,
    averagelengthsum,
}