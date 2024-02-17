let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let api1 = `https://api.betabotz.eu.org/api/cecan/${command}?apikey=${global.lann}`
    let api2 = `https://api.botcahx.eu.org/api/cecan/${command}?apikey=${global.btc}`
    let buffer = await fetch(api1)
        .then(res => res.buffer())
        .catch(async (err) => {
            console.log(`API 1 failed with error: ${err}. Trying API 2...`)
            buffer = await fetch(api2).then(res => res.buffer())
            return buffer
        })
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `Random ${command}`, m)
}

handler.command = handler.help = ['china','vietnam','thailand','indonesia','korea','japan','malaysia','justinaxie','jeni','jiso','ryujin','rose','hijaber']
handler.tags = ['asupan'];
handler.premium = true;
module.exports = handler;
