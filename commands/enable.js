module.exports = ({
name: "enable",
code: `
$setUserVar[command;enabled;$commandInfo[$message[1];name]]
$sendMessage[The \`$commandInfo[$message[1];name]\` command was enabled!;no]
$onlyIf[$checkContains[$commandInfo[$message[1];code];#CHAR#onlyIf[#CHAR#getUserVar[command#SEMI##CHAR#commandName]!=disabled#SEMI#]]!=false;You can't enable this command!]
$onlyIf[$commandInfo[$message[1];name]!=;That command doesn't exist]
$onlyPerms[manageserver;no u]
`
})