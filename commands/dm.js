module.exports = ({
 name: "dm", 
 code: `$sendDm[$findUser[$message[1]];{title: Mail}
{description:You got a mail from $username[$authorID]
(<@$authorID>)

**Message**
$messageSlice[1]}]
$color[BLUE]
$author[$username;$authorAvatar]

$description[<a:tick:908666945971298375>Message Sent To <@$findUser[$message[1]]>]
$suppressErrors[{title: Error}{description:An Error Occurred While Processing The Request....}]
$onlyIf[$isUserDmEnabled[$findUser[$message[1]]]!=false;{title: Error}{description: <@$findUser[$messags[1]]> dm \`disabled\`}{color:ff0000}{delete:10s}]
$onlyIf[$messageSlice[1]!=;{title: Error}{color:ff0000}{description:**Error Type:**\n\`\`\`kt\nNo Message Given To Dm\n\`\`\`\n**Correct Usage:**\n\`\`\`kt\n$getServerVar[prefix]dm <user ID/mention> <message>\n\`\`\`\n**Example:**\n\`\`\`kt\n\$getServerVar[prefix]dm 510349473420017666 hello,buddy\n\`\`\`}{delete:10s}]
$onlyIf[$message[1]!=;{title: Error}{description:**Error Type:**\n\`\`\`kt\nNo User ID/Mention Given\n\`\`\`\n**Correct Usage:**\n\`\`\`kt\n$getServerVar[prefix]dm <user ID/mention> <message>\n\`\`\`}{color:ff0000}{delete:10s}]
$onlyBotPerms[embedlinks; **Error**\n\`\`\`kt\nError Type: Permission Required\nMake sure i have EMBED_LINKS, EXTERNAL_EMOJIS Perms!\n\`\`\`{delete:59s}]
`
});