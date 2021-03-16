var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "NzY3NjY1OTA1NTA0MDkyMTYw.X41Olg.nsot9mf0BoPStZPlHAC-KPdi96Q",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "-help",
  type: "WATCHING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "-",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}