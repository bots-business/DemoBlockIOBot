/*CMD
  command: /onarchived
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let addresses = options.addresses;
Bot.sendMessage("Arhived: `" + addresses[0].address + "`");
