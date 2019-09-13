/*CMD
  command: /getaddressbylabel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input label for address now
  keyboard: 
  aliases: 💵get address balance
CMD*/

Libs.BlockIO.Bitcoin.getAddressByLabel(
    { label:message, onSuccess: "/onGetAddressByLabel", onError: "/onerror" }
);
