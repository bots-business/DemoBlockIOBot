/*CMD
  command: /ontotalbalance
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options;
Bot.sendMessage("Total Balance for " + wallet.network + 
    ": `" + wallet.available_balance + 
    "` BTC \npending: " + 
    wallet.pending_received_balance + " BTC"
);


