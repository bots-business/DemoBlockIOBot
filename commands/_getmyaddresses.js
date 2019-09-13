/*CMD
  command: /getmyaddresses
  help: Returns the (unarchived) addresses, their labels, user ids, and balances on your account. 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📝all addresses
CMD*/

Libs.BlockIO.Bitcoin.getMyAddresses(
  { onSuccess: "/ongetmyadresses", onError: "/onerror" }
);
