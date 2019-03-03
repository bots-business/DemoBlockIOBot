/*CMD
  command: /ongettransactions
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let transactions = options;
let answer = "";

answer+= "Network: " + transactions.network;

function parseIncoming(tx){
  let received = tx.amounts_received;
 
  if(!received){ return "" }
  let result = ""
  for(let ind in received){
    result+= "\n  📥recipient: `" + received[ind].recipient + "`" +
             "\n  💰amount: `" + received[ind].amount + "`";
  }
  if(result==""){ return "" }
  
  result+="\n  ▪senders: "
  for(let ind in tx.senders){
     result+= "`" + tx.senders[ind] + "` ";
  }
  
  return result;
}

let tx, time;
for(let ind in transactions.txs){
  tx = transactions.txs[ind];
  time = new Date(tx.time*1000);
  time = time.toLocaleString()
  
  answer+= "\n\nTXID:`" + tx.txid + "`";
  answer+= "\n  ⌚time: `" + time + "`";
  answer+= "\n  🔢confirmations: " + tx.confirmations;
  
  answer+= parseIncoming(tx)
  
}

Bot.sendMessage(answer);



