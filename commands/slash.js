module.exports = [{
    name: "ping-slash",
    code: `created ping slash command!
    $createApplicationCommand[global;ping;replies with Pong;true;slash]`
    },{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[$pingms]`
      }]