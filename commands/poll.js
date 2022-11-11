module.exports = {
  
  name: "poll",
  code: `$title[Poll Time!]
$addReactions[👍;👎;❔]
$description[$message] 
$footer[👍 Yes - 👎 Not - ❔ Maybe]
$color[BLUE]
$argsCheck[>1;**Use:** \`$getServerVar[prefix]poll <PollMessage>\`]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]`
}
