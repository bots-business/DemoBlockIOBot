/*CMD
  command: /getouttransactions
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🔴outgoing transactions
CMD*/

Libs.BlockIO.Bitcoin.getTransactions(
    { type: "sent",
     onSuccess: "/onGetOutTransactions", onError: "/onerror" }
);

