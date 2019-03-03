/*CMD
  command: /getaddressbalance
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please input address now
  keyboard: 
  aliases: 
CMD*/

Libs.BlockIO.Bitcoin.getAddressBalance(
    { addresses:message, onSuccess: "/ongetaddressbalance", onError: "/onerror" }
);
