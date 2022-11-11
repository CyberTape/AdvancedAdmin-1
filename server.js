const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('The server is now active!');
});
server.listen(3000);

const Aoijs = require("aoi.js")
var fs = require("fs")

const bot = new Aoijs.Bot({
  token: "OTQzOTIxNTU3Mjk2Nzc5MzU0.GMUHz_.3xMoKqJCrIPz6p7FGOcmibSNM87dd70UFWhTe4",
  prefix: "$getServerVar[prefix]",
  fetchInvites: true
})

bot.status({
  text: "-help",
  type: "WATCHING",
  time: 6

})

bot.status({
  text: "$serverCount Servers",
  type: "WATCHING",
  time: 6

})

bot.status({
  text: " $allMembersCount Members",
  type: "WATCHING",
  time: 6
})

bot.status({
  text: "Current Bot Ping $pingms",
  type: "WATCHING",
  time: 6

})

bot.status({
  text: "$commandsCount Commands",
  type: "LISTENING",
  time: 6

})
//event

bot.onMessage()



// Variable
bot.variables({
  prefix: "-",
  Warn: "0",
  Warnreason: "",
  XP: "0",
  Bank: "0",
  Wallet: "0",
  psuffix: '0',
  DailyChest: "0",
  lucky: "0",
  spiteful: "0",
  rch: "",
  exp: "0",
  rexp: "40",
  rsystem: "0",
  muted: "",
  reason: "",
  wchannel: "",
  snipe_msg: "",
  snipe_author: "",
  command: "enabled",
  snipe_channel: "",
  snipe_date: "",
  money: "900",
  user_ID: "",
  user_message: "",
  wmessage: "",
  mutedrole: "828517955905388584",
  modlogs: "824605277012754453",
  psuffix: '0',
  tv: "0",
  duffle: '0',
  bag: "0",
  smartphone: "0",
  laptop: "0",
  car: "0",
  truck: "0",
  helicopter: "0",
  apartment: "0",
  house: "0",
  mansion: "0",
  lucky: "0",
  AFK: "off",
  time: "",
  spiteful: "0",
  chatbotchannel: "Not Set",
  language: "english"
})


//commands handler
var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
    name: command.name,
    code: command.code
  })
}




bot.command({
  name: "help",
  code: `$reactionCollector[$splitText[1];everyone;1m;🔄,1️⃣,2️⃣,3️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
  $textSplit[$sendMessage[{title:<a:settings:908685063330353232>**Help**<a:settings:908685063330353232>
  } {description:<:utility:915934937574682624>All the commands in the bot<:utility:915934937574682624>

  1️⃣ - **Main Commands.**<a:arrow_leftani:908688758801584128>
  2️⃣ - **Economy Commands.**<a:arrow_leftani:908688758801584128>
  3️⃣ - **Bot Info Commands.**<a:arrow_leftani:908688758801584128>

 {footer: AdvancedAdmin}
} {color:BLUE};yes]; ]$onlyIf[$getUserVar[command;$commandName]!=disabled;]`})

bot.awaitedCommand({
  name: "awaitReaction1",
  code: `$editMessage[$message[1];{title:<a:settings:908685063330353232>**Help**<a:settings:908685063330353232>
  } {footer: AdvancedAdmin}
 {description:<:utility:915934937574682624>All the commands in the bot<:utility:915934937574682624>

  1️⃣ - **Main Commands.**<a:arrow_leftani:908688758801584128>
  2️⃣ - **Economy Commands.**<a:arrow_leftani:908688758801584128>
  3️⃣ - **Bot Info Commands.**<a:arrow_leftani:908688758801584128>

  } {color:BLUE}
  ]
  $onlyIf[$getUserVar[command;$commandName]!=disabled;]
`})

bot.awaitedCommand({
  name: "awaitReaction2",
  code: `
  $editMessage[$message[1];{title:Page 1} {description:<a:settings:908685063330353232>**Main Commands**<a:settings:908685063330353232>


  <:dot_877959363388641300:908686311060307968> **Ban** - Bans a user from the server.

  <:dot_877959363388641300:908686311060307968> **Kick** - Kicks a user from the server.

  <:dot_877959363388641300:908686311060307968> **Poll** - Create a poll.

  <:dot_877959363388641300:908686311060307968> **Setprefix** - Sets the bots prefix on the server.

  <:dot_877959363388641300:908686311060307968> **Clear** - Clears multiple messages.

  <:dot_877959363388641300:908686311060307968> **Slowmode** - Puts a cooldown to a channel.

  <:dot_877959363388641300:908686311060307968> **Membercount** - Shows the amount of members are in the server.

  <:dot_877959363388641300:908686311060307968>  **Tempban**  - Temporarily bans a user from the server.

  <:dot_877959363388641300:908686311060307968> **Unban** - Unbans a banned user from the server.
  
  <:dot_877959363388641300:908686311060307968> **Warn** - Warns a user.

  <:dot_877959363388641300:908686311060307968> **Gr** - Give a role to a specific user. 

  <:dot_877959363388641300:908686311060307968> **Clearwarn** - Removes a warn from a user.

  <:dot_877959363388641300:908686311060307968> **Checkwarn** - Check the amount of warns of a user.

  <:dot_877959363388641300:908686311060307968> **Mute** - Mutes a user.

  } {color:BLUE} {footer:🔄 - Return to home page | AdvancedAdmin }
  ]
  `
})


bot.awaitedCommand({
  name: "awaitReaction3",
  code: `
  $editMessage[$message[1];{footer:🔄 - Return to home page | AdvancedAdmin }
  {title:Page 2} {description:<a:settings:908685063330353232>**Economy Commands**<a:settings:908685063330353232> 

  <:dot_877959363388641300:908686311060307968> **bal** - Shows you your current balance.

  <:dot_877959363388641300:908686311060307968> **Work** - Type this command and you'll earn money.

  <:dot_877959363388641300:908686311060307968> **Beg** - Beg for money.

  <:dot_877959363388641300:908686311060307968> **Deposit** - Deposit your money in to your bank account.

  <:dot_877959363388641300:908686311060307968> **Fish** - Fish for Fish and earn money.

  <:dot_877959363388641300:908686311060307968> **Daily** - Earn money daily.

  <:dot_877959363388641300:908686311060307968> **Withdraw** - Withdraw money from your bank account and put it in your wallet.
  
  <:dot_877959363388641300:908686311060307968> **Give** - Give money to anyone in the server.

  <:dot_877959363388641300:908686311060307968> **Search** - Search for money.

  <:dot_877959363388641300:908686311060307968> **Rob** - Rob someone.

  <:dot_877959363388641300:908686311060307968> **Shop** - Buy things from the shop.

  <:dot_877959363388641300:908686311060307968> **Rich** -  Wallet leaderboard.

  <:dot_877959363388641300:908686311060307968> **Bankboard** - Bank leaderboard.

  <:dot_877959363388641300:908686311060307968> **Flip-apartment** - Find some money under the apartament.

  <:dot_877959363388641300:908686311060307968> **Flip-house** - Find some money under the house.

  <:dot_877959363388641300:908686311060307968> **Scrap-truck** - Find some money in the truck.
  
  <:dot_877959363388641300:908686311060307968> **Scrap-helicopter** - Find some money in the helicopter.

  <:dot_877959363388641300:908686311060307968> **Scrap-car** - Find some money in the car.

  <:dot_877959363388641300:908686311060307968> **Steal** - Steal from someones bank account and XP base.

  <:dot_877959363388641300:908686311060307968> **Open-lucky** - Open a lucky chest.

  <:dot_877959363388641300:908686311060307968> **Buy-lucky** - Buy a lucky chest.

  <:dot_877959363388641300:908686311060307968> **Buy-bag** - Buy a bag.

  <:dot_877959363388641300:908686311060307968> **Buy-mansion** - Buy a mansion.

  <:dot_877959363388641300:908686311060307968> **Buy-apartament** - Buy an apartament.

  <:dot_877959363388641300:908686311060307968> **Buy-house** - Buy a house.

  <:dot_877959363388641300:908686311060307968> **Buy-helicopter** - Buy a helicopter.

  <:dot_877959363388641300:908686311060307968> **Buy-laptop** - Buy a laptop

  <:dot_877959363388641300:908686311060307968> **Buy-truck** - Buy a truck.

  <:dot_877959363388641300:908686311060307968> **Buy-tv** - Buy a TV.

  <:dot_877959363388641300:908686311060307968> **Buy-phone** - Buy a phone.

  <:dot_877959363388641300:908686311060307968> **Buy-car** - Buy a car.
  
  <:dot_877959363388641300:908686311060307968> **Profile** - Check out your profile and what you have.

  } {color:BLUE} 
  ]
  `
})


bot.awaitedCommand({
  name: "awaitReaction4",
  code: `
  $editMessage[$message[1];{footer:🔄 - Return to home page | AdvancedAdmin }
  {title:Page 3} {description:<a:settings:908685063330353232>**Bot Info Commands**<a:settings:908685063330353232>

  <:dot_877959363388641300:908686311060307968> **Botinfo** - Shows you the info about the bot.

  <:dot_877959363388641300:908686311060307968> **Commands** - This shows you the number of commands the bot has.

  <:dot_877959363388641300:908686311060307968> **Allmembers** - Shows you how many members the bot is watching.



  } {color:BLUE} 
  ]
  `
})


bot.command({
  name: "mute",
  code: `
$setTimeout[$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;100d];false;$messageSlice[1]];
muteID: $mentioned[1]
mutedRole: $roleID[Muted]]
$giveRole[$mentioned[1];$roleID[Muted]]
 $channelSendMessage[$channelID;Succesfully Muted <@$mentioned[1]>]
 $onlyIf[$mentioned[1]!=$clientID;I can't mute myself!]
 $onlyIf[$mentioned[1]!=$authorID;You can't mute yourself!] $onlyIf[$hasRoles[$mentioned[1];$roleID[Muted]]==false;User is already muted]
$onlyBotPerms[manageroles;I don't have manage roles permission!]
$suppressErrors[Something went wrong...]
 $onlyIf[$roleExists[$findRole[Muted]]==true;I can't find Role "Muted" Please create that role and try again ]
 $onlyIf[$mentioned[1]!=;Please mention someone]
 $onlyBotPerms[manageroles;I need manage roles permissions!] 
 $onlyPerms[manageroles;You need manage roles permission to use this command]`})
bot.timeoutCommand({
  code: `
$takeRole[$timeoutData[muteID];$timeoutData[mutedRole]]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`})

bot.command({
  name: "work",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Work]
$description[
$username, $randomText[it looks like you'd do anything for money 😳.;you were employed as a construction worker today!;you're a discord workaholic!;nice music dude! Here, you earned it!;you were employed as a hair stylist today;hacking can make you a good deal of money if you know what you're doing! From your last hack job, you made;your bitcoin miner scraped up some cash for you!;were you not satisfied with your past employers? Well I counted the tips from your pole dancing gig and you didn't do too bad 😳]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]`
})

bot.command({
  name: "beg",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;25]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$title[Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Begging is for the weak so here;Here, take this and go;Here, don't let this be a habit;I take you for a well put together human being, why are you begging?;Why can't you just get a job?]
]
$footer[💵 +$$random[0;25] | 🗡 +$random[0;5]xp]
$globalCooldown[30s;Quit being a begger and try again in %time%]`
})

bot.command({
  name: "bal",
  code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]]'s Balance]
$description[
$addField[🗡 Experience;
$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]xp
]
$addField[💵 Wallet;
$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]
]
$addField[🏦 Bank;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
]
$addField[📊 Net Worth;
$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]
]]`
})

bot.command({
  name: "profile",
  code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ Discord bots dont have profiles**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$title[Economy profile]
$color[RANDOM]
$description[
**__User/ID__**:
<@$mentioned[1;yes]>
$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
(\`$mentioned[1;yes]\`)
 
**__Chests__**:
**$getGlobalUserVar[DailyChest;$mentioned[1;yes]]** | Daily
**$getGlobalUserVar[lucky;$mentioned[1;yes]]** | Lucky
**$getGlobalUserVar[spiteful;$mentioned[1;yes]]** | Spiteful
 
**__Flow__**:
\`💵\` **$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]**
\`🏦\` **$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
\`📊\` **$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
\`🗡\` **$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]**xp
 
**__Assets__**:
\`💼\` ($getGlobalUserVar[duffle;$mentioned[1;yes]]) Bags
\`📺\` ($getGlobalUserVar[tv;$mentioned[1;yes]]) TVs
\`📱\` ($getGlobalUserVar[smartphone;$mentioned[1;yes]]) Smartphones
\`💻\` ($getGlobalUserVar[laptop;$mentioned[1;yes]]) Laptops
\`🚗\` ($getGlobalUserVar[car;$mentioned[1;yes]]) Cars
\`🚚\` ($getGlobalUserVar[truck;$mentioned[1;yes]]) Trucks
\`🚁\` ($getGlobalUserVar[helicopter;$mentioned[1;yes]]) Helicopters
\`🏫\` ($getGlobalUserVar[apartment;$mentioned[1;yes]]) Apartments
\`🏡\` ($getGlobalUserVar[house;$mentioned[1;yes]]) Houses
\`🏰\` ($getGlobalUserVar[mansion;$mentioned[1;yes]]) Mansions
]`
})


bot.command({
  name: "deposit",
  aliases: 'dep',
  code: `$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you deposited $$numberSeparator[$message] into your bank!]
$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Wallet;$authorID];Cannot deposit more than what's in your wallet!]
$argsCheck[>1;How much are you depositing? Try this: \`$getServerVar[prefix]dep <amount>\`]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>0;There's nothing to deposit!]`
})


bot.command({
  name: 'withdraw',
  aliases: 'with',
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you withdrew $$numberSeparator[$message] from your bank!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[Bank;$authorID]>0;There's nothing to withdraw!]`
})


bot.command({
  name: "daily",
  code: `$setGlobalUserVar[DailyChest;$sum[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Daily Chest]
$description[
Congrats $username! You received 1 daily chest!
This action can be done once every 12 hours.
]
$footer[To open use, $getServerVar[prefix]open-daily]
$onlyIf[$getGlobalUserVar[DailyChest;$authorID]<1;**You still have an unopened daily chest in your inventory. Open it for room to receive another chest.** \`$getServerVar[prefix]open-daily\`]
$globalCooldown[12h;**⛔ Please wait %time% before you can claim another daily chest!**]`
})


bot.command({
  name: "open-daily",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
$setGlobalUserVar[DailyChest;$sub[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];15];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Daily Chest]
$description[$username, you opened your Daily Chest!
]
$footer[💵 +$250 | 🗡 +15xp]
$onlyIf[$getGlobalUserVar[DailyChest;$authorID]==1;**⛔ You dont have a Daily Chest yet! Try using \`$getServerVar[prefix]daily\` to receive your Daily Chest and then run this command to open it**]`
})


bot.command({
  name: "heist",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[4800;7600]];$authorID]
$setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop;$authorID];1];$authorID]
$setGlobalUserVar[smartphone;$sub[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
$setGlobalUserVar[duffle;$sub[$getGlobalUserVar[duffle;$authorID];1];$authorID]
$setGlobalUserVar[tv;$sub[$getGlobalUserVar[tv;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[20;42]];$authorID]
$color[00ff00]
$thumbnail[$userAvatar[$authorID]]
$title[Heist]
$description[$username, you used a \`Laptop\` to hack the security system in your favor, a rooted \`Smartphone\` to shut down the cameras and used the \`TV\` screen to monitor surveillance while you fill your \`Bag\` with a buttload of cash and then tossed the contraband $randomText[in a lake!;over a bridge!;down a storm drain!;in separate dumpsters around town!;in the bed of a random truck!;on a roof!;in a ditch!]
]
$footer[💵 +$$numberSeparator[$random[4800;7600]] | 🗡 +$random[20;42]]
$onlyIf[$getGlobalUserVar[laptop;$authorID]>=1;Missing laptop. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[smartphone;$authorID]>=1;Missing smartphone. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[duffle;$authorID]>=1;Missing bag. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[tv;$authorID]>=1;Missing TV. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=300;You need at least 300 XP to commit a heist! \`XP will not be deducted and is only needed as a requirement!\`]
$globalCooldown[3h;Wait %time% until you can launch another heist!]`
})

bot.command({
  name: "give",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$noMentionMessage];$authorID]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username gave $username[$mentioned[1]] money]
$description[
$username gave $username[$mentioned[1]] **$noMentionMessage** :dollar:!
$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[Wallet;$mentioned[1]];$noMentionMessage]** :dollar: in his wallet!
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[Wallet;$authorID];**⛔ You don't have enough in your wallet**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't give money to yourself**]
$onlyIf[$mentioned[1]!=;**⛔ Mention someone to give money to and then the amount, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
$onlyIf[$isBot[$mentioned[1]]!=true;**⛔ You can't give money to a Discord bot**]
$onlyIf[$isNumber[$noMentionMessage]==true;**⛔ That is not a number, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
$suppressErrors[Usage: **$getServerVar[prefix]givemoney <@user> <amount>**]`
})

bot.command({
  name: "shop",
  code: `$thumbnail[$authorAvatar]
$title[Economy Shop]
$color[RANDOM]
$description[
$addField[__Items:__;
\`💼\` **$250 | bag**
\`📺\` **$400 | tv**
\`📱\` **$500 | phone**
\`💻\` **$1,000 | laptop**
\`🚗\` **$10,000 | car**
\`🚚\` **$15,000 | truck**
\`🚁\` **$20,000 | helicopter**
\`🏫\` **$50,000 | apartment**
\`🏡\` **$100,000 | house**
\`🏰\` **$500,000 | mansion**
]
$addField[__Purchasable chests:__;
**$250 | lucky**
**$1,000 | spiteful**
\`Lucky\` - **Press your luck. Nobody loses!**
\`Spiteful\` - **Possibility of winning $10,000 but be warned, it could be spiteful! Goodluck!**
]]
$footer[Use command $getServerVar[prefix]buy-<object> to buy an object! Example: $getServerVar[prefix]buy-lucky]`
})

bot.command({
  name: "buy-car",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];10000];$authorID]
$setGlobalUserVar[car;$sum[$getGlobalUserVar[car;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];250];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=10000;Need $10,000 in your wallet, try withrawing it first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=250;You need 250 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚗 $username]
$description[
Nice! You bought a Car for $10,000!
**250xp has been deducted!**
You can strip it for parts to scrap for more money and XP.
]
$footer[Usage: $getServerVar[prefix]scrap-car]`
})

bot.command({
  name: "buy-phone",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];500];$authorID]
$setGlobalUserVar[smartphone;$sum[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>499;Need $500 in your wallet, try withrawing it first]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📱 $username]
$description[
Nice! You bought a smartphone for $500!
]
$footer[This item is used to commit a heist]`
})

bot.command({
  name: "buy-tv",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];400];$authorID]
$setGlobalUserVar[tv;$sum[$getGlobalUserVar[tv;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>399;Need $400 in your wallet, try withrawing first]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📺 $username]
$description[
Nice! You bought a TV for $400!
]
$footer[This item is used to commit a heist]`
})

bot.command({
  name: "buy-truck",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];15000];$authorID]
$setGlobalUserVar[truck;$sum[$getGlobalUserVar[truck;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];300];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=15000;Need $15,000 in your wallet, try withrawing it first]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=300;You need 300 XP, in which will be deducted after purchase]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚚 $username]
$description[
Nice! You bought a Truck for $15,000!
**300xp has been deducted!**
You can strip it for parts to scrap for more money and XP.
]
$footer[Usage: $getServerVar[prefix]scrap-truck]`
})

bot.command({
  name: "buy-laptop",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];1000];$authorID]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>999;Need $1,000 in your wallet, try withrawing it first.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[💻 $username]
$description[
Nice! You bought a laptop for $1,000!
]
$footer[This item is used to commit a heist]`
})

bot.command({
  name: "buy-helicopter",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];20000];$authorID]
$setGlobalUserVar[helicopter;$sum[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];350];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=20000;Need $20,000 in your wallet, try withrawing it first]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=350;You need 350 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚁 $username]
$description[
Nice! You bought a Helicopter for $20,000!
**350xp has been deducted!**
You can strip it for parts to scrap for more money and XP.
]
$footer[Usage: $getServerVar[prefix]scrap-helicopter]`
})

bot.command({
  name: "buy-house",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];100000];$authorID]
$setGlobalUserVar[house;$sum[$getGlobalUserVar[house;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];500];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=100000;Need $100,000 in your wallet, try withrawing it first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=500;You need 500 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🏡 $username]
$description[
Nice! Stepping up! You bought a House for $100,000!
**500 XP has been deducted!**
Coming up in the world I see! The real estate business is in high demand and you can make a difference! Try flipping the house to make a profit and earn more XP.
]
$footer[Usage: $getServerVar[prefix]flip-house]`
})


bot.command({
  name: "buy-apartment",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];50000];$authorID]
$setGlobalUserVar[apartment;$sum[$getGlobalUserVar[apartment;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];400];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=50000;Need $50,000 in your wallet, try withrawing it first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=400;You need 400 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🏫 $username]
$description[
Nice! Stepping up! You bought an Apartment for $50,000!
**400xp has been deducted!**
The real estate business is in high demand and you can make a difference! Try flipping the apartment to make a profit and earn more XP.
]
$footer[Usage: $getServerVar[prefix]flip-apartment]`
})

bot.command({
  name: "buy-mansion",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];500000];$authorID]
$setGlobalUserVar[mansion;$sum[$getGlobalUserVar[mansion;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];750];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=500000;Need $500,000 in your wallet, try withrawing it first]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=750;You need 750 XP, in which will be deducted after purchase]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏰 $username]
$description[
Nice! You bought a Mansion for $500,000!
**750 XP has been deducted!**
Now you're just showing off and living it up lol! Try flipping the mansion to make a profit and earn more XP.
]
$footer[Usage: $getServerVar[prefix]flip-mansion]`
})

bot.command({
  name: "buy-bag",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
$setGlobalUserVar[duffle;$sum[$getGlobalUserVar[duffle;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[💼 $username]
$description[
Nice! You bought a dufflebag for $250!
]
$footer[This item is used to commit a heist]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>249;Need $250 in your wallet, try withdrawing it first]`
})

bot.command({
  name: "buy-spiteful",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];1000];$authorID]
$setGlobalUserVar[spiteful;$sum[$getGlobalUserVar[spiteful;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Spiteful Chest]
$description[You bought a Spiteful chest for $1,000!
**Open it and see what you find!
Just be warned! It could be spiteful, Goodluck!**
]
$footer[Usage: $getServerVar[prefix]open-spiteful]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>999;Need $1,000 in your wallet, try withrawing it first]`
})

bot.command({
  name: "open-spiteful",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]];$authorID]
$setGlobalUserVar[spiteful;$sub[$getGlobalUserVar[spiteful;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[10;20]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Spiteful Chest]
$description[You opened a spiteful Chest!
]
$footer[💵 +$$numberSeparator[$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]] | 🗡 +$random[10;20]xp]
$onlyIf[$getGlobalUserVar[spiteful;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
$globalCooldown[20m;To prevent exploitations, a cooldown is in effect for opening all purchasable chests! Try again in \`%time%\`]`
})

bot.command({
  name: "buy-lucky",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
$setGlobalUserVar[lucky;$sum[$getGlobalUserVar[lucky;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>249;Need $250 in your wallet, try withrawing it first.]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Lucky Chest]
$description[You bought a lucky chest for $250!
Open it and press your luck for a chance to get the $5,000 lucky pot! Goodluck!
]
$footer[Usage: $getServerVar[prefix]open-lucky]`
})

bot.command({
  name: "open-lucky",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]];$authorID]
$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[3;7]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Lucky Chest]
$description[You opened a lucky Chest!
]
$footer[💵 +$$numberSeparator[$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]] | 🗡 +$random[3;7]xp]
$onlyIf[$getGlobalUserVar[lucky;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
$globalCooldown[3m;To prevent exploitations, a cooldown is in effect for opening all purchasable chests! Try again in \`%time%\`]`
})

bot.command({
  name: "rob",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[50;75];$authorID]]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username robbed $username[$mentioned[1]]]
$description[
$addField[$username;
💵 +$$random[0;750]
🗡 +$random[50;75]xp
Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]] | $sum[$getGlobalUserVar[XP;$authorID];$random[50;75]]xp
]
$addField[$username[$mentioned[1]];
Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]]xp
]]
$footer[💵 -$$random[0;750] | 🗡 -$random[50;75]xp]
$globalCooldown[15m;You can rob someone again in %time%]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=750;Your wallet needs to contain at least $750 to rob someone.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=75;You need at least 75xp to rob someone.]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=25;They need at least 25xp]
$onlyIf[$getGlobalUserVar[Wallet;$mentioned[1]]>=750;Their wallet needs to contain at least $750]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't rob discord bots**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't rob yourself**]
$onlyIf[$mentioned[1]!=;**⛔ Mention someone to rob**]`
})


//Steal from someones bank account and XP base
bot.command({
  name: "steal",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[250;2500]];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$mentioned[1]];$random[250;2500]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[75;150]];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username stole from $username[$mentioned[1]]'s bank]
$description[
$addField[$username;
💵 +$$random[1000;2500]
🗡 +$random[75;150]xp
Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[1000;2500]] | $sum[$getGlobalUserVar[XP;$authorID];$random[75;150]]xp
]
$addField[$username[$mentioned[1]];
Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[1000;2500]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]]xp
]]
$footer[💵 -$$random[1000;2500] | 🗡 -$random[75;150]xp]
$globalCooldown[30m;You can steal from someone's bank account again in %time%]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=1000;You need at least 1,000 XP to steal from someone's bank account]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=500;They need at least 500 XP to be sapped from!]
$onlyIf[$getGlobalUserVar[Bank;$mentioned[1]]>=7500;Their bank needs to contain at least $7,500 to be stolen from.]
$onlyIf[$isBot[$mentioned[1]]!=true;You can't steal from discord bots]
$onlyIf[$mentioned[1]!=$authorID;You can't rob yourself lol]
$onlyIf[$mentioned[1]!=;Mention someone to steal from thier bank account. Try this: \`$getServerVar[prefix]steal @user\`]`
})

bot.command({
  name: "search",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[20;60]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[1;5]];$authorID]
$title[Search]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[you looked under the welcome mat.;you went searching thru your mom's purse while she was asleep.;you're hungry so you decided to search thru the dumpster behind the Subway.;you searched your dads truck very thoroughly.;your friends came over and when one of them went to the bathroom, you searched thru his coat pockets.]
]
$footer[💵 +$$random[20;60] | 🗡 +$random[1;5]xp]
$globalCooldown[35s;Looking for a little loose change? You're going to have to try again in %time%]`
})

bot.command({
  name: "scrap-car",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[11000;16000]];$authorID]
$setGlobalUserVar[car;$sub[$getGlobalUserVar[car;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[260;300]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚗 Scrapped]
$description[
Nice $username! You scrapped a car for its parts and sold them for a profit!
]
$footer[💵 +$$numberSeparator[$random[11000;16000]] | 🗡 +$random[260;300]xp]
$globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[car;$authorID]>=1;You need at least 1 \`Car\` in your inventory to scrap]`
})

bot.command({
  name: "scrap-helicopter",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[22000;29000]];$authorID]
$setGlobalUserVar[helicopter;$sub[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[360;435]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚁 Scrapped]
$description[
Nice $username! You scrapped a helicopter for its parts and sold them for a profit!
]
$footer[💵 +$$numberSeparator[$random[22000;29000]] | 🗡 +$random[360;435]xp]
$globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[helicopter;$authorID]>=1;You need at least 1 \`Helicopter\` in your inventory to scrap]`
})


bot.command({
  name: "scrap-truck",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[16500;22000]];$authorID]
$setGlobalUserVar[truck;$sub[$getGlobalUserVar[truck;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[310;380]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚚 Scrapped]
$description[
Nice $username! You scrapped a truck for its parts and sold them for a profit!
]
$footer[💵 +$$numberSeparator[$random[16500;22000]] | 🗡 +$random[310;380]xp]
$globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[truck;$authorID]>=1;You need at least 1 \`Truck\` in your inventory to scrap]`
})

bot.command({
  name: "flip-house",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[125000;150000]];$authorID]
$setGlobalUserVar[house;$sub[$getGlobalUserVar[house;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[550;650]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏡 Flipped]
$description[
Nice job $username! You flipped your house and sold it for a profit!
]
$footer[💵 +$$numberSeparator[$random[125000;150000]] | 🗡 +$random[550;650]xp]
$globalCooldown[12h;Real estate investors aren't made of money and they can only buy your assets once every 12 hours! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[house;$authorID]>=1;You need to have bought at least 1 \`House\` to flip]`
})

bot.command({
  name: "flip-apartment",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[70000;95000]];$authorID]
$setGlobalUserVar[apartment;$sub[$getGlobalUserVar[apartment;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[425;525]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏫 Flipped]
$description[
Nice job $username! You flipped your apartment and sold it for a profit!
]
$footer[💵 +$$numberSeparator[$random[70000;95000]] | 🗡 +$random[425;525]xp]
$globalCooldown[12h;Real estate investors aren't made of money and they can only buy your assets once every 12 hours! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[apartment;$authorID]>=1;You need to have bought at least 1 \`Apartment\` to flip]`
})

bot.command({
  name: "fish",
  code: `$color[RANDOM]
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[50;100]]]
$title[$username is fishing]
$description[You fished a $randomText[🥿;👠;👡;👢;👞;👟;🥾;🦀;🦑;🐙;🦞;🦐;🐠;🐟;🐡;🐬;🦈;🐳;🐋;🐊;🦢;🦆] and you get $$random[50;100]]
$globalCooldown[15m;**⏳ You can fish again in %time%**]`
})


bot.command({
  name: "bankboard",
  code: `$title[**__🏦 Bank leaderboard__** 
$globalUserLeaderboard[Bank;asc]]
$color[RANDOM]
$footer[You have $$numberSeparator[$getGlobalUserVar[Bank;$authorID]] 💵 in your bank]`
})


bot.command({
  name: "rich",
  code: `$title[**__👛Global wallet leaderboard👛__**
$globalUserLeaderboard[Wallet;asc]]
$color[GREEN]
$footer[You have $$numberSeparator[$getGlobalUserVar[Wallet;$authorID]] 💵 in your wallet]`
})


//Resets user money for all guilds
bot.command({
  name: "reset",
  code: `$resetGlobalUserVar[Wallet]
$resetGlobalUserVar[Bank]
$resetGlobalUserVar[XP]
$title[Reset]
$description[Economy has been reset for all guilds]
$footer[Economy Commands]
$color[RANDOM]
$onlyForIDs[$botOwnerID;**⛔ You're not the owner of this bot**]`
})
bot.command({
  name: "meme",
  aliases: ['memes'],
  code: `$title[JOKE!]
$description[$getObjectProperty[setup]

$getObjectProperty[punchline]]
$createObject[$jsonRequest[https://official-joke-api.appspot.com/random_joke]]$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})

bot.command({
  name: "join",
  aliases: ['connect'],
  code: `
Successfully joined <#$voiceid[$authorid]>
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
$onlyIf[$voiceid[$authorid]!=; Please join a Voice Channel and use this command.]$onlyIf[$getUserVar[command;$commandName]!=disabled;]`
})

bot.command({
  name: "dice",
  code: `$botTyping
 $title[Dice Roll]
 $color[007BFF]
 $description[Rolling your Dice]
 $editIn[1s;{title:Dice Roll}{color:007BFF}{description:Rolling your Dice.};{title:Dice Roll}{color:007BFF}{description:Rolling your Dice..};{title:Dice Roll}{color:007BFF}{description:Rolling your Dice...};{title:Dice Roll}{color:FFD200}{description:You got: $randomText[1️⃣;2️⃣;3️⃣;4️⃣;5️⃣;6️⃣]}{footer:Rolled by $username}]
$cooldown[10s;Please wait **%time%** to roll another Dice.]$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})





bot.deletedCommand({
  channel: "$channelID",
  code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day.$month.$year - $hour:$minute]`
});
bot.onMessageDelete();

bot.command({
  name: "rob",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[50;75];$authorID]]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username robbed $username[$mentioned[1]]]
$description[
$addField[$username;
💵 +$$random[0;750]
🗡 +$random[50;75]xp
Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]] | $sum[$getGlobalUserVar[XP;$authorID];$random[50;75]]xp
]
$addField[$username[$mentioned[1]];
Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]]xp
]]
$footer[💵 -$$random[0;750] | 🗡 -$random[50;75]xp]
$globalCooldown[15m;You can rob someone again in %time%]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=750;Your wallet needs to contain at least $750 to rob someone.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=75;You need at least 75xp to rob someone.]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=5;They need at least 5xp]
$onlyIf[$getGlobalUserVar[Wallet;$mentioned[1]]>=750;Their wallet needs to contain at least $750]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't rob discord bots**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't rob yourself**]
$onlyIf[$mentioned[1]!=;**⛔ Mention someone to rob**]$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`

})
bot.command({
  name: "warn",
  code: `
$setUserVar[Warn;$sum[$getUserVar[Warn;$mentioned[1]];1];$mentioned[1]]
$setUserVar[Warnreason;
• Warned due to: $noMentionMessage
Moderator:$username;$mentioned[1]]


$title[⚠️ Warning ⚠️] 
$description[<@$mentioned[1]> **You have been warned!** 
 
**Reason**: **$noMentionMessage**] 
$footer[Warned by $username] 
$thumbnail[$serverIcon]
$color[GREEN]
$addTimestamp
$onlyPerms[manageroles;**You can't warn members!**]
$onlyIf[$message!=;**Please mention the user you want to warn!**]$onlyIf[$getUserVar[command;$commandName]!=disabled;]

  `
})

bot.command({
  name: "clearwarn",
  code: `
$title[Warns Cleared!!]
$description[<@$mentioned[1;yes]>'s **Warnings has been deleted!**]
$footer[Action performed by $username]
$thumbnail[$serverIcon]
$color[GREEN]
$setUserVar[Warn;0;$mentioned[1;yes]]
$setUserVar[Warnreason; ;$mentioned[1;yes]]
$onlyIf[$mentioned[1;yes]!=;**Please Mention someone!**]
$onlyPerms[manageroles;**You can't clear Warns for members!**]$onlyIf[$getUserVar[command;$commandName]!=disabled;]

  `
})
bot.command({
  name: "checkwarn",
  code: `
$title[$username[$mentioned[1;yes]] Warnings]
$description[$getUserVar[Warn;$mentioned[1;yes]] warnings found!!$getUserVar[Warnreason;$mentioned[1]]]
$footer[Requested by $username]
$color[RED]
$thumbnail[$serverIcon]
$onlyPerms[manageroles;You cannot check anyone's warnings!]
$onlyIf[$mentioned[1;yes]!=;**Please mention someone!**]
$addTimestamp
$onlyIf[$getUserVar[command;$commandName]!=disabled;]

  `
})


bot.command({
  name: "myname",
  code: `your name is $username`
})

bot.command({
  name: "ping",
  aliases: ["p", "status"],
  code: `
$title[Ping Command]
$color[BLUE]
$description[$botPing ms]
$footer[$username[$clientID]]`
})



bot.command({
  name: "ban",
  code: `$color[BLUE] 
$author[Banned successfully✅]
$addField[About:;
Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]
Date:
> $day $month $year
]
$addField[User information;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderator;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];<a:error:908665367440797716> - To use this you need to have a higher rank than the mentioned user.]
$onlyIf[$findUser[$message[1]]!=$authorID;**<a:error:908665367440797716> - You can't ban yourself (Or else, I couldn't find that user)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**<a:error:908665367440797716> - I can't ban myself, that's illegal**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**<a:error:908665367440797716> - I can't ban the owner of the server**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**<a:error:908665367440797716> - You can't ban yourself (Or else, I couldn't find that user)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**<a:error:908665367440797716> - This user has already been banned on this server**]
$onlyIf[$message!=;**<a:error:908665367440797716> - Please specify the user you want to ban. Correct usage:** \`$getServerVar[prefix]ban <@User> [Reason\\]\`]
$onlyPerms[ban;**<a:error:908665367440797716> - To use this you require the \`BAN_MEMBERS\` permission**]
 $onlyBotPerms[ban;**<a:error:908665367440797716> - I don't have enough perms to execute this command. Permissions missing:** \`BAN_MEMBERS\`]
 $onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})

bot.command({
  name: "unban",
  code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **has been unbanned. <a:tick:908666945971298375>**
$onlyBotPerms[ban;**<a:error:908665367440797716> I don't have ban perms]
$argsCheck[>1;**<a:error:908665367440797716> Please Provide User ID To Unban**]
$onlyPerms[ban;**<a:error:908665367440797716> You need ban permission**]
$suppressErrors[**<a:error:908665367440797716> I can't find that user**]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})

bot.command({
  name: "kick",
  code: `$kick[$findUser[$message[1]]]
 $title[Kick]
 $description[
 Successfully kicked the user<a:tick:908666945971298375>**
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Kicked by $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**<a:wrong:908686422184198184> I can't kick my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**<a:wrong:908686422184198184> You can't kick yourself**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**<a:wrong:908686422184198184> You can't kick someone with higher or the same roles as you**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**<a:wrong:908686422184198184> I can't kick someone with higher or the same roles as me**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**<a:wrong:908686422184198184> Couldn't find a member with this ID/name/mention in the server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**<a:wrong:908686422184198184> I can't modify the server owner**]
$onlyIf[$message[1]!=;**<a:wrong:908686422184198184> Please mention someone to kick.**]
$onlyBotPerms[kick;**<a:wrong:908686422184198184> The bot doesn't have enough permissions**]
$onlyPerms[kick;**<a:wrong:908686422184198184> You don't have enough permission**]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})

bot.command({
  name: "lock",
  code: `$sendmessage[{description:**Channel Locked by** <@$authorID>! <a:tick:908666945971298375>}{color:BLUE};no]
$textsplitmap[lock]
$textsplit[$channelOverwrites[$channelid;{mention};/];/]
$onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
$onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions! <a:error:908665367440797716>]`
})
bot.awaitedCommand({
  name: "lock",
  code: `$modifychannelperms[$channelid;-sendmessages;$findnumbers[$message[1]]]`
})

bot.command({
  name: "unlock",
  code: `$sendmessage[{description:**Channel Unlocked by** <@$authorID>! <a:tick:908666945971298375>}{color:BLUE};no]
$textsplitmap[unlock]
$textsplit[$channelOverwrites[$channelid;{mention};/];/]
$onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
$onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!<a:error:908665367440797716>]`
})
bot.awaitedCommand({
  name: "unlock",
  code: `$modifychannelperms[$channelid;+sendmessages;$findnumbers[$message[1]]]`
})

bot.command({
  name: "$alwaysExecute",
  code: `$onlyIf[$channelID==$getServerVar[chatbotchannel];]
 $description[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message&botname=Ori&ownername=Boost-Studios;message]]`
})
bot.command({
  name: "setchatbot",
  code: `$title[Successfully set chatbot channel!]$description[chabot is set to $mentionedChannels[1].]
 $setServerVar[chatbotchannel;$mentionedChannels[1]]
 $onlyPerms[admin;You need the admin permission to set the chat-bot channel.]`
})

bot.command({
  name: "botinfo",
  description: "Shows the bot's stats",
  code: `
 $editMessage[$get[msgid];{author:$username[$clientID] Status:$userAvatar[$clientID]}
 {field:Ping:\`$ping\`:yes}
 {field:Database Ping:\`$dbPing\`:yes}
 {field:CPU:\`$cpu\`:yes}
 {field:RAM:\`$ram\`:yes}
 {field:Runtime:\`$uptime\`:yes}
 {field:Version:\`$packageVersion\`:yes}
 {field:Developer:\`$userTag[$botOwnerID]\`:yes}
 {color:BLUE}]
 
 $wait[3s]
 
 $botTyping
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching RAM...\`}
 {color:BLUE}]
 $wait[$textSlice[a$findNumbers[$ram];1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching CPU...\`}
 {color:BLUE}]
 $wait[$textSlice[a1$findNumbers[$cpu]00;1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching Ping...\`}
 {color:BLUE}]
 $wait[$textSlice[x$ping000;1;5]ms]
 
 $botTyping
 
 $let[msgid;$sendMessage[{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {color:BLUE};yes]]
 
 $serverCooldown[10s;Please wait %time%.]`
})


{ }  
