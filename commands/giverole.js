module.exports = {
 name: "gr",
 code: `$suppressErrors[An error occurred]
 $title[Success!]
 $description[Successfully gave $username[$mentioned[1]] the role <@&$roleID[$nomentionmessage]>]
 $footer[Role given by $username;$authoravatar]
 $onlyPerms[manageroles;To think you can use this command without \`ManageRoles\` perms, you must be a troll]
 $color[GREEN]
 $giverole[$mentioned[1];$roleID[$nomentionmessage]]
 $argsCheck[>2;Hey, do you really think you can give someone a role without mentioning them or specifying the role name?]
 $argsCheck[>1;Hey, do you really think you can give someone a role without mentioning them or specifying the role name?]`
}