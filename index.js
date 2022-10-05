function writeCards(names, type)
{
    const ret = [];
    for (let i = 0; i < names.length; i++)
    {
       ret.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
    }
    return ret;
}

function countDown(a)
{
    while (a > -1)
    {
        console.log(a)
        a-=1;
    }
}