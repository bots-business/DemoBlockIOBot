/*CMD
  command: /onerror
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Error");

if(options&&options.data){
  Bot.sendMessage(options.data.error_message);
}

