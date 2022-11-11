module.exports = {
 name: "tempban",
 code: `
 <@$mentioned[1]> has been successfully unbanned due to temp-ban.
 $unban[$mentioned[1]]
 $wait[$message[2]]
 $ban[$mentioned[1]]
 $channelSendMessage[$channelID;<@$mentioned[1]> has been successfully temp-banned for $message[2], I will send a message when they are unbanned.]
 $argsCheck[>2;Please mention a user to temp-ban & enter a time!]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than me on role position]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
 $onlyIf[$mentioned[1]!=$authorID;You can't ban yourself]
 $onlyIf[$mentioned[1]!=;You must mention someone.]
 `
}