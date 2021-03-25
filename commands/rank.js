module.exports = ({
 name: "rank", 
 aliases: ['experiencerank','exprank','level','exp'],
 cat: "Experience",
 usage: "rank <User>",
 desc: "Displays your current level and your progress until the next level.",
 code: `
 $reply[$messageID;
 {color:RANDOM}
 {image:https://vacefron.nl/api/rankcard?username=$replaceText[$username[$findMember[$message]]; ;+;-1]&avatar=$userAvatar[$findMember[$message]]?size=4096&level=$getUserVar[level;$findMember[$message]]&rank=&currentxp=$getUserVar[exp;$findMember[$message]]&nextlevelxp=$getUserVar[expReq;$findMember[$message]]&previouslevelxp=0&custombg=https://i.imgur.com/EBPIwMZ.jpeg&xpcolor=$getServerVar[theme]&isboosting=$isBoosting[$findMember[$message]]}
 {footer:$username[$findMember[$message]] needs $replaceText[$sub[$sum[$getUserVar[expReq;$findMember[$message]];0];$getUserVar[exp;$findMember[$message]]];-; ;1] more EXP to level up!};no]

 $cooldown[10s;You're on cooldown! Please wait %time%.{delete:$getCooldownTime[user;rank;$authorID;yes]ms}]

 $onlyIf[$checkContains[$channelType;text;news]==true;]

 $suppressErrors[Something went wrong...{delete:10s}]`
})