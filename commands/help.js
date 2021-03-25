module.exports = { 

name: "help",
code: `$title[Help Menu]
$thumbnail[$userAvatar[$authorID]]
  $description[**- His Prefix on this Server \`$getServerVar[prefix]\` **

**⚙ Command List**

\`$getServerVar[prefix]kick\` - Kicks Someone from server.
\`$getServerVar[prefix]ban\` - Bans User from server.
\`$getServerVar[prefix]poll\` - Polling.
\`$getServerVar[prefix]clear\` - Deletes Messages.
\`$getServerVar[prefix]setprefix\` - Set Custom Prefix.]
$color[BLUE]
$footer[AdvancedAdmin!]
$addTimestamp`

}
