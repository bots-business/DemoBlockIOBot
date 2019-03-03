/*CMD
  command: /ongetmyadresses
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallets = options;
Bot.sendMessage("Network: " + wallets.network);

let addresses = wallets.addresses;
let answer = "*Yours wallets:*\n"

let counter = 0;
for(let ind in addresses){
  if(counter>10){ break } // no more then 10 addresses

  counter+=1;
  answer= answer + "#️⃣ `" +  addresses[ind].address + "`" +
      "\n  🏷️Label: `" + addresses[ind].label.split("_").join("") + "`" +
      "\n  💰balance: `" + addresses[ind].available_balance + "`" +
      "\n  ⏳pending received balance: " + addresses[ind].pending_received_balance +
      "\n  ❌Archive: /archive" + addresses[ind].label +
      "\n\n"
}

Bot.sendMessage(answer);


