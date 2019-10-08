const OwOinio3oo3o7w7UvU9o9k = {
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

function decode(_0v0qwqxnx0v0k) {
    let unuqwq0v00V0unuUvU0W0iniomo0V0qwqk = ""
    let _0w0OnOunuouoUnUk = _0v0qwqxnx0v0k.split(" ");
    for (_0w0OnOunuouok of _0w0OnOunuouoUnUk) {
        _0w0OnOunuouok = _0w0OnOunuouok.replace("k", "");
        let omoqwq0v00v0qwqunuUnUk = _0w0OnOunuouok.match(/.{1,3}/g).filter(l => l != "");

        let iniUvUUnU0w0qwqunuk = "";
        for (omoqwq0v00v0qwqunuk of omoqwq0v00v0qwqunuUnUk) {
            if (OwOinio3oo3o7w7UvU9o9k[omoqwq0v00v0qwqunuk]) {
                iniUvUUnU0w0qwqunuk += OwOinio3oo3o7w7UvU9o9k[omoqwq0v00v0qwqunuk]
            } else {
                iniUvUUnU0w0qwqunuk += "?"
            }
        }
        unuqwq0v00V0unuUvU0W0iniomo0V0qwqk += iniUvUUnU0w0qwqunuk + " "
    }

    return unuqwq0v00V0unuUvU0W0iniomo0V0qwqk

}

function objectFlip(OnO9w9xDDk) {
    const unuqwq0v0k = {};
    Object.keys(OnO9w9xDDk).forEach((x33qwqxvxk) => {
        unuqwq0v0k[OnO9w9xDDk[x33qwqxvxk]] = x33qwqxvxk;
    });
    return unuqwq0v0k;
}

function encode(_0v0qwqxnx0v0k) {
    _0v0qwqxnx0v0k = _0v0qwqxnx0v0k.toLowerCase();
    let unuqwq0v00V0unuUvU0W0iniomo0V0qwqk = ""
    let _0w0OnOunuouoUnUk = _0v0qwqxnx0v0k.split(" ");

    const unuqwq0W0qwqunuUnUqwqOwOinio3oo3o7w7UvU9o9k = objectFlip(OwOinio3oo3o7w7UvU9o9k);

    for (_0w0OnOunuouok of _0w0OnOunuouoUnUk) {
        let omoqwq0v00v0qwqunuUnUk = _0w0OnOunuouok.split("");

        let iniUvUUnU0w0qwqunuk = "";
        for (omoqwq0v00v0qwqunuk of omoqwq0v00v0qwqunuUnUk) {
            if (unuqwq0W0qwqunuUnUqwqOwOinio3oo3o7w7UvU9o9k[omoqwq0v00v0qwqunuk]) {
                iniUvUUnU0w0qwqunuk += unuqwq0W0qwqunuUnUqwqOwOinio3oo3o7w7UvU9o9k[omoqwq0v00v0qwqunuk]
            } else {
                iniUvUUnU0w0qwqunuk += omoqwq0v00v0qwqunuk
            }
        }
        unuqwq0v00V0unuUvU0W0iniomo0V0qwqk += iniUvUUnU0w0qwqunuk + "k" + " "
    }
    return unuqwq0v00V0unuUvU0W0iniomo0V0qwqk
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