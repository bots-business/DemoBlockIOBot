/*CMD
  command: /ongetouttransactions
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

function parseOutcoming(tx){
  let sended = tx.amounts_sent;
 
  if(!sended){ return "" }
  let result = ""
  for(let ind in sended){
    result+= "\n  📥recipient: `" + sended[ind].recipient + "`" +
             "\n  💰amount: `" + sended[ind].amount + "`";
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
  
  answer+= parseOutcoming(tx)
  
}

Bot.sendMessage(answer);



