module.exports = ({
 name: "serverinfo",
 code: `
 $title[Server Info]
 $addField[**Verification Level**;$serverVerificationLevel;yes]
 $addField[**Members**;
 \`\`\`All: $membersCount\`\`\`
 \`\`\`Users: $sub[$membersCount;$botcount]\`\`\`
 \`\`\`Bots: $botCount\`\`\`;yes]
 $addField[**Channels**;
 \`\`\`All: $channelCount\`\`\`
 \`\`\`Text: $channelCount[text]\`\`\`
 \`\`\`Voice: $channelCount[voice]\`\`\`;yes]
 $addField[**Roles**;$guildRoles;yes]
 $addField[**Custom Emojis**;| $serverEmojis |;yes]
 $addField[**Creation Date**;$creationDate[$guildID];yes]
 $addField[**Boost Level**;$serverBoostLevel;yes]
 $addField[**Boosts**;$serverBoostCount;yes]
 $addField[**Region**;$serverRegion;yes]
 $addField[**Server Invite**;$getServerInvite;yes]
 $addField[**Owner**;<@$ownerID>;yes]
 $addField[**Server Name**;$serverName[$guildID];yes]
 `
})