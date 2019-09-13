/*CMD
  command: /ongetaddressbylabel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/



let address = options;

let answer = "Network: " + address.network;

answer+= "\n\n#️⃣ `" +  address.address + "`" +
      "\n  🏷️Label: `" + address.label + "`" +
      "\n  💰balance: `" + address.available_balance + "`" +
      "\n  ⏳pending received balance: " + address.pending_received_balance +
      "\n  ❌Arhive: /arhive" + address.label +
      "\n\n"

Bot.sendMessage(answer);
