/*CMD
  command: /gettransactions
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 🔵income transactions
CMD*/

Libs.BlockIO.Bitcoin.getTransactions(
    { type: "received",
     onSuccess: "/onGetTransactions", onError: "/onerror" }
);

