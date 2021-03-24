module.exports = ({
name: "mute",
code: `
$giveRoles[$mentioned[1];$roleID[Muted]]
$channelSendMessage[$channelID;{title:**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** has been muted by $username for **$noMentionMessage**}{color:00ffff}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't mute yourself]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[manageroles;{title:Missing Permissions}{color:00ffff}{description:You don't have **Manage Roles** permissions to use this command}]
$suppressErrors[Please make a role named **Muted**]`
})