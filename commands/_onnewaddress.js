/*CMD
  command: /onnewaddress
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options;
Bot.sendMessage("*New wallet* was created. \n  #⃣Wallet: `" + 
    wallet.address + "`\n  🏷Label: `" +
wallet.label + "`");
