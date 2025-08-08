const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
await conn.sendMessage(from,{image: {url: `https://i.imgur.com/zFufQXg.jpeg`},caption: `*Hello ${pushname}, HASHAN MD IS ALIVE NOW !*

*OWNER : HASHIYA TECH*
*VERSION : 1.0*
*PLATFORM : HEROKU*
*MEMORY : UNLIMITED*

*TYPE .PING TO CHECK BOT SPEED ✨🎉*

> HASHAN MD WHATSAPP BOT`},
                       
{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
