// Code your solutions in this file
function writeCards(names)
{
    let temp = [];
    for (let i = 0; i < names.length; i++)
    {
        temp.push(("Thank you, " + names[i] + ", for the wonderful surprise gift!"))
    }
    return temp;
}

function countDown(num)
{
    for (let i = num; i >= 0; i--)
        console.log(i);
}