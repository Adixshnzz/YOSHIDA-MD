 const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw(`Input Text Dan Karakter!\nExample: ${usedPrefix + command} hai Kirito|kamu sedang apa?`)    
  try {
    let [ logic, prompt ] = text.split('|')
    m.react('⏱️')
    let res = await fetch(`https://api.botcahx.eu.org/api/search/c-ai?prompt=${prompt}?&char=${logic}&apikey=Bang_Putra`)
    let json = await res.json()
    m.reply(json.message)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat menjalankan perintah.')
  }
}

handler.command = handler.help = ['c-ai','character-ai']
handler.tags = ['ai']
handler.owner = false
handler.limit = false
handler.group = false
handler.private = false

module.exports = handler
