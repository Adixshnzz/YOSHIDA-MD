let handler = async (m, { conn, text }) => {

let putra = `*Sama sama*`.trim()

    conn.sendMessage(m.chat, { text: putra, }, { quoted: m })
          
  
  }
handler.customPrefix =/^(terima(kasih)?|(thanks|)$/i
handler.command = new RegExp

module.exports = handler