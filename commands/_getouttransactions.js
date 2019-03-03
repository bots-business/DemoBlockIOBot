/*CMD
  command: /getouttransactions
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 🔴outgoing transactions
CMD*/

Libs.BlockIO.Bitcoin.getTransactions(
    { type: "sent",
     onSuccess: "/onGetOutTransactions", onError: "/onerror" }
);

