const random = function(array)
{
    let item = Math.round(Math.random() * (array.length - 1));
    return array[item];
}

module.exports =
{
    random,
}