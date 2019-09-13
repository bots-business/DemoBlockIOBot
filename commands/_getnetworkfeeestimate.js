/*CMD
  command: /getnetworkfeeestimate
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input to_addresses
  keyboard: 
  aliases: 💲estimate network fee
CMD*/

Libs.BlockIO.Bitcoin.getNetworkFeeEstimate(
    { to_addresses:message, amounts:0.00001, onSuccess: "/ongetnetworkfeeestimate", onError: "/onerror" }
);
