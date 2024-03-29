let handler = async (m, {
  usedPrefix,
  command,
  text
}) => {
  try {
    if (!text) return m.reply(Func.example(usedPrefix, command, 'Elon Musk'))
    m.react('🕒')
    const json = await Func.fetchJson(API('alya', '/api/bing', { q: text }, 'apikey'))
    if (!json.status) return m.reply(Func.jsonFormat(json))
    m.reply(json.data.content)
  } catch (e) {
    console.log(e)
    return m.reply(Func.jsonFormat(e))
  }
}
handler.help = handler.command = ['bing']
handler.tags = ['ai']
handler.limit = 2
module.exports = handler