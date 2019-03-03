/*CMD
  command: /totalbalance
  help: Returns the balance of your entire TestNet Bitcoin (i.e., the sum of balances of all addresses/users within it) as numbers to 8 decimal points, as strings.
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 💰balance
CMD*/

Libs.BlockIO.Bitcoin.getBalance({ onSuccess: "/ontotalbalance", onError: "/onerror" } );
