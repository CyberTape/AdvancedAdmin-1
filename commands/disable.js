module.exports = ({
name: "disable",
code: `
$setUserVar[command;disabled;$commandInfo[$message[1];name]]
$sendMessage[The \`$commandInfo[$message[1];name]\` command was disabled!;no]
$onlyIf[$checkContains[$commandInfo[$message[1];code];#CHAR#onlyIf[#CHAR#getUserVar[command#SEMI##CHAR#commandName]!=disabled#SEMI#]]!=false;You can't disable this command!]
$onlyIf[$commandInfo[$message[1];name]!=;That command doesn't exist]
$onlyPerms[manageserver;no u]
`
})