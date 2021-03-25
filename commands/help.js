module.exports = { 

name: "help",
code: `$title[Help Menu]
$thumbnail[$userAvatar[$authorID]]
  $description[**- His Prefix on this Server \`$getServerVar[prefix]\` **

**⚙ Command List**

\`$getServerVar[prefix]kick\` - Kicks Someone from server.
\`$getServerVar[prefix]ban\` - Bans User from server.
\`$getServerVar[prefix]warn\` - Warns User.
\`$getServerVar[prefix]checkwarn\` - Checks amount of warns one user has.
\`$getServerVar[prefix]removewarn\` - Removes a warn from one of the users.
\`$getServerVar[prefix]poll\` - Polling.
\`$getServerVar[prefix]clear\` - Deletes Messages.
\`$getServerVar[prefix]setprefix\` - Set Custom Prefix.
\`$getServerVar[prefix]Mute\` - Mutes a User.
\`$getServerVar[prefix]Hack\` - Hack your friends! Or your enemies... BTW if you think this is a real hack get your brain checked for smoothness.]
$color[BLUE]
$footer[AdvancedAdmin!]
$addTimestamp`

}
