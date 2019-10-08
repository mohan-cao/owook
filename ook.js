const mapping = {
    "owo": "0",
    "OWO": "1",
    "owO": "2",
    "O3O": "3",
    "uvu": "4",
    "u3u": "5",
    "OvO": "6",
    "uwu": "7",
    "ono": "8",
    "n3n": "9",
    "ini": "a",
    "9w9": "b",
    "oco": "c",
    "ouo": "d",
    "qwq": "e",
    "oAo": "f",
    "9o9": "g",
    "OoO": "h",
    "7w7": "i",
    "xDD": "j",
    "x33": "k",
    "omo": "l",
    "OwO": "m",
    "UvU": "n",
    "OnO": "o",
    "o3o": "p",
    "n3n": "q",
    "unu": "r",
    "UnU": "s",
    "0v0": "t",
    "0V0": "u",
    "0W0": "v",
    "0w0": "w",
    "xnx": "x",
    "xvx": "y",
    "xwx": "z",
};

function decode(text) {
    let returnValue = ""
    let words = text.split(" ");
    for (word of words) {
        word = word.replace("k", "");
        let letters = word.match(/.{1,3}/g).filter(l => l != "");

        let answer = "";
        for (letter of letters) {
            if (mapping[letter]) {
                answer += mapping[letter]
            } else {
                answer += "?"
            }
        }
        returnValue += answer + " "
    }

    return returnValue

}

function objectFlip(obj) {
    const ret = {};
    Object.keys(obj).forEach((key) => {
        ret[obj[key]] = key;
    });
    return ret;
}

function encode(text) {
    text = text.toLowerCase();
    let returnValue = ""
    let words = text.split(" ");

    const reverseMapping = objectFlip(mapping);

    for (word of words) {
        let letters = word.split("");

        let answer = "";
        for (letter of letters) {
            if (reverseMapping[letter]) {
                answer += reverseMapping[letter]
            } else {
                answer += letter
            }
        }
        returnValue += answer + "k" + " "
    }
    return returnValue
}

module.exports = { encode, decode, }

// Run from command line
if (require.main === module) {
    if (process.argv[2] === "decode") {
        console.log(decode(process.argv[3]));
    } else {
        console.log(encode(process.argv[3]));
    }
}