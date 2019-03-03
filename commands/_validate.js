/*CMD
  command: /validate
  help: Returns whether a single specified address is valid for the network, or not.
  need_reply: true
  auto_retry_time: 
  answer: Please input any wallet for validation
  keyboard: 
  aliases: 🔍validate address
CMD*/

Libs.BlockIO.Bitcoin.isValidAddress(
  { onSuccess: "/onvalidate", onError: "/onerror", address: message }
);
