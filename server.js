const qwqUvUocoOnOouoqwqk = require('./ook.js').encode;
const ouoqwqocoOnOouoqwqk = require('./ook.js').decode;
const oAoUnUk = require('fs');
const qwqxnxo3ounuqwqUnUUnUk = require('express')
const inio3oo3ok = qwqxnxo3ounuqwqUnUUnUk()

inio3oo3ok.use(qwqxnxo3ounuqwqUnUUnUk.urlencoded({ extended: true}));


inio3oo3ok.get('/', function (unuqwqn3nk, unuqwqUnUk) {
    data = oAoUnUk.readFileSync('./main.html', 'utf8')
    unuqwqUnUk.send(data.replace("TEST_STRING", ""))
})

const OwOiniUnU0v0qwqunuo3oiniUnUUnU0w0OnOunuouok = [ "OnOOnOOnOOnOx33k" ]

let iniocoocoOnO0V0UvU0v0UnUk = []


inio3oo3ok.post('/', async function (unuqwqn3nk, unuqwqUnUk) {
    data = oAoUnUk.readFileSync('./main.html', 'utf8')

    const iniUvUUnU0w0qwqunuUnU0v0unu7w7UvU9o9k = unuqwqn3nk.body.mode === "decode" ? ouoqwqocoOnOouoqwqk(unuqwqn3nk.body.text) : qwqUvUocoOnOouoqwqk(unuqwqn3nk.body.text);

    const o3oiniUnUUnUk = unuqwqn3nk.body.password;

    let UnUqwqUvU0v0k = false;

    if (OwOiniUnU0v0qwqunuo3oiniUnUUnU0w0OnOunuouok.includes(unuqwqn3nk.body.password)) {
        unuqwqUnUk.send(data.replace("TEST_STRING", iniUvUUnU0w0qwqunuUnU0v0unu7w7UvU9o9k))
        UnUqwqUvU0v0k = true;
    } else {
        const iniocoocoOnO0V0UvU0v0k = iniocoocoOnO0V0UvU0v0UnUk.find(a => a.pass == o3oiniUnUUnUk);
        if (iniocoocoOnO0V0UvU0v0k) {

            const _0v07w7OwOqwqk = Date.now() / 1000;
            if (iniocoocoOnO0V0UvU0v0k.expiry > _0v07w7OwOqwqk && (iniocoocoOnO0V0UvU0v0k.used > 0 || iniocoocoOnO0V0UvU0v0k.used < 0)) {

                iniocoocoOnO0V0UvU0v0k.used = iniocoocoOnO0V0UvU0v0k.used - 1;

                unuqwqUnUk.send(data.replace("TEST_STRING", iniUvUUnU0w0qwqunuUnU0v0unu7w7UvU9o9k))
                UnUqwqUvU0v0k = true;
            }
        }
    }

    if (!UnUqwqUvU0v0k) {
        unuqwqUnUk.send(data.replace("TEST_STRING", "Wrong Password"))
    }
})

//o3oiniUnUUnU0w0OnOunuouok
//o3oiniUnUUnUk
//0v07w7OwOqwqk
//UvU0V0OwO9w9qwqunuk
inio3oo3ok.post('/create', async function (req, res) {
    const o3oiniUnUUnUk = req.body.password;

    if (OwOiniUnU0v0qwqunuo3oiniUnUUnU0w0OnOunuouok.includes(req.body.password)) {
        const iniocoocoOnO0V0UvU0v0k = iniocoocoOnO0V0UvU0v0UnUk.find(a => a.pass == o3oiniUnUUnUk);
        const _0v07w7OwOqwqk = Date.now() / 1000 + (60 * req.body.time);

        if (!iniocoocoOnO0V0UvU0v0k) {
            iniocoocoOnO0V0UvU0v0UnUk.push({ 'pass': req.body.pass, 'expiry': _0v07w7OwOqwqk, 'used': req.body.number})
        } else {
            iniocoocoOnO0V0UvU0v0k.pass = req.body.pass;
            iniocoocoOnO0V0UvU0v0k.expiry = req.body.time;
            iniocoocoOnO0V0UvU0v0k.used = req.body.number;
        }
    }
    res.send("done")
})


inio3oo3ok.listen(3000)
