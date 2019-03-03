/*CMD
  command: /getcurrentprice
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please input BASE CURRENCY. For example: `USD`, `GBP`, `CNY` and etc
  keyboard: 
  aliases: 💵current price
CMD*/

Libs.BlockIO.Bitcoin.getCurrentPrice(
    { price_base:message, onSuccess: "/onGetCurrentPrice", onError: "/onerror" }
);
