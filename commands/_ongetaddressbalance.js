/*CMD
  command: /ongetaddressbalance
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let addresses = options;

let answer = "Network: " + addresses.network;

let ind = 0;
balances = addresses.balances;

answer+= "\n\n#️⃣ `" +  balances[ind].address + "`" +
      "\n  🏷️Label: `" + balances[ind].label + "`" +
      "\n  💰balance: `" + balances[ind].available_balance + "`" +
      "\n  ⏳pending received balance: " + balances[ind].pending_received_balance +
      "\n  ❌Arhive: /arhive" + balances[ind].label +
      "\n\n"

Bot.sendMessage(answer);
