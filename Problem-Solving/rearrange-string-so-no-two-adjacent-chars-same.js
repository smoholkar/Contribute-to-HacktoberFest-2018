/**
 * Rearrange characters in a string such that no two adjacent are same
 */
const noAdjacentCharsSame = (inString) =>
{
    let inArray = inString.split("");
    let buf = [];
    const outArray = [];
    let ct = 0;
    while (inArray.length > 0)
    {
        // console.log(`inArray: ${inArray.join("")} \t buf: ${buf.join("")} \t outArray: ${outArray.join("")}`);
        let curChar = inArray.shift();
        if (((outArray.length > 0) && (outArray[outArray.length-1] !== curChar)) ||  (outArray.length === 0))
        {
            outArray[outArray.length] = curChar;
            if (buf.length > 0)
            {
                inArray = [...buf, ...inArray];
                buf = []
            }
        }
        else
        {
            buf.push(curChar);
        }
    }

    if (buf.length > 0)
    {
        return "not possible";
    }
    return outArray.join("");
};

if (typeof process.argv[2] !== 'undefined')
{
    console.log(process.argv[2]);
    console.log(noAdjacentCharsSame(process.argv[2]));
}

// console.log(`aaabc \t ${noAdjacentCharsSame('aaabc')}`);
// console.log(`aaabb \t ${noAdjacentCharsSame('aaabb')}`);
// console.log(`aa \t ${noAdjacentCharsSame('aa')}`);
// console.log(`aaaabc \t ${noAdjacentCharsSame('aaaabc')}`);

module.exports = noAdjacentCharsSame;